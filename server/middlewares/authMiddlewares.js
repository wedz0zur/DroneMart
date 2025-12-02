import AuthError from "../exсeptions/auth-error.js";
import tokenService from "../service/token-service.js";

export default function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(AuthError.UnauthorizedError());
    }

    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return next(AuthError.UnauthorizedError());
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(AuthError.UnauthorizedError());
    }

    req.user = userData;
    next();
  } catch (e) {
    return next(AuthError.UnauthorizedError());
  }
}
