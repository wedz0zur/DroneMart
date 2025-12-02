import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import mailService from "./mail-service.js";
import tokenService from "./token-service.js";
import UserDto from "../dtos/user-dto.js";
import AuthError from "../exсeptions/auth-error.js";

class UserService {
  async registration(name, lastName, email, password) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw AuthError.BadRequest(
        `Пользователь с таким почтовым адресом ${email} уже существует`
      );
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuidv4();

    const user = await User.create({
      name,
      lastName,
      email,
      password: hashPassword,
      activationLink,
      role: "User"
    });
    await mailService.sendActivatioMail(
      email,
      `${process.env.API_URL}/auth/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(activationLink) {
    const user = await User.findOne({ activationLink });
    if (!user) {
      throw AuthError.BadRequest("Некорректная ссылка активации");
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw AuthError.BadRequest("Пользователь с таким email не найден");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw AuthError.BadRequest("Неверный пароль");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken)
    return token
  }


  async refresh(refreshToken) {
    if (!refreshToken) {
      throw AuthError.UnauthorizedError()
    }
    const userData = tokenService.validateRefreshToken(refreshToken)
    const tokenFormDb = await tokenService.findOne(refreshToken)
    if (!userData || !tokenFormDb) {
      throw AuthError.UnauthorizedError();
    }
    const user = await User.findById(userData.id)
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }


  async getAllUsers() {
    const users = await User.find()
    return users
  }

}

export default new UserService();
