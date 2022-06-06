const express = require("express");
const User = require("../schemas/user");
const router = express.Router();

router.post("/users", async (req, res, next) => {
  const { nickname, email, password, confirmPassword } = req.body;
  console.log(nickname, email, password, confirmPassword);

  if (password !== confirmPassword) {
    return res.status(400).send({
      errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
    });
  }

  const existUsers = await User.find({
    $or: [{ email }, { nickname }], // email or nickname이 있는지 확인
  });

  if (existUsers.length) {
    return res.status(400).send({
      errorMessage: "이미 가입된 이메일 또는 닉네임이 있습니다.",
    });
  }

  const user = new User({ email, nickname, password });
  await user.save();

  return res.status(201).send({});
});

module.exports = router;
