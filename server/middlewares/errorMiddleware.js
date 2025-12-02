import jwt from "jsonwebtoken";
import { secret } from "../config.js";
import AuthError from "../exсeptions/auth-error.js";

const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  if(err instanceof AuthError){
    return res.status(err.status).json({message: err.message, errors: err.errors})
  }
  return res.status(500).json({message: 'Не предвиденная ошибка', errors: err.errors})
};

export default errorMiddleware;




// const authMiddleware = (req, res, next) => {
//   if (req.method === "OPTIONS") {
//     return next(); // Немедленный выход для preflight-запросов
//   }

//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//       return res.status(403).json({ message: "Требуется авторизация" });
//     }

//     const token = authHeader.split(" ")[1]; // формат: "Bearer TOKEN"

//     if (!token) {
//       return res.status(403).json({ message: "Неверный формат токена" });
//     }

//     const decodedData = jwt.verify(token, secret);
//     req.user = decodedData; // { id, ...другие данные из payload }

//     next();
//   } catch (e) {
//     console.error("JWT verification error:", e.message);

//     if (e instanceof jwt.TokenExpiredError) {
//       return res.status(403).json({ message: "Токен истёк" });
//     }

//     if (e instanceof jwt.JsonWebTokenError) {
//       return res.status(403).json({ message: "Недействительный токен" });
//     }

//     return res.status(403).json({ message: "Ошибка авторизации" });
//   }
// };