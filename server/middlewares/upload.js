import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, callback) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      callback(null, true); // Разрешаем загрузку
    } else {
      console.log("Допускаются только файлы формата JPG, JPEG или PNG");
      callback(new Error("Ошибка загрузки: недопустимый формат файла"), false); // Блокируем загрузку
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 6, // Макс размер 6 МБ
  },
});

export default upload;
