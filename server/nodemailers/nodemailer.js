import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "rachael.gusikowski58@ethereal.email",
    pass: "qB4UXj3QDSZvwYdTYm",
  },
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error("Ошибка при отправке письма:", err);
      return;
    }
    console.log("Email успешно отправлен:", info.response);
  });
};

export default mailer;
