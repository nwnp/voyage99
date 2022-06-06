const express = require("express");
const { Op } = require("sequelize");
const User = require("../models");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/auth-middleware");

// 개인정보 조회
router.get("/users/me", authMiddleware, async (req, res, next) => {
  const { user } = res.locals;
  return res.status(201).send({
    user: {
      email: user.email,
      nickname: user.nickname,
    },
  });
});

// signup
router.post("/users", async (req, res, next) => {
  const { nickname, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).send({
      errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
    });
  }

  const existUsers = await User.findAll({
    where: {
      [Op.or]: [{ nickname }, { email }],
    },
  });

  if (existUsers.length) {
    return res.status(400).send({
      errorMessage: "이미 가입된 이메일 또는 닉네임이 있습니다.",
    });
  }

  await User.create({ email, nickname, password });

  return res.status(201).send({});
});

// login
router.post("/auth", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return res.status(401).send({
      errorMessage: "이메일 또는 패스워드가 잘못 입력되었습니다.",
    });
  }

  const token = jwt.sign({ userId: user.userId }, process.env.MY_SECRET_KEY);
  res.send({ token });
});

module.exports = router;
