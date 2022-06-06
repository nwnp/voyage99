const jwt = require("jsonwebtoken");
const User = require("../models");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [tokentype, tokenValue] = authorization.split(" ");

  if (tokentype !== "Bearer") {
    return res.status(401).json({
      errorMessage: "로그인 후 사용하세요.",
    });
  }

  try {
    const { userId } = jwt.verify(tokenValue, process.env.MY_SECRET_KEY);
    User.findByPk(userId)
      .then((user) => {
        res.locals.user = user; // 사용자 정보를 담아서 넘김
        next(); // 모든 예외처리가 패스된 이후에만 next()
      })
      .catch(() => {
        return res.status(400).json({
          errorMessage: "유효하지 않은 회원입니다.",
        });
      });
  } catch (error) {
    return res.status(401).json({
      errorMessage: "로그인 후 사용하세요.",
    });
  }
};
