const express = require("express");
const router = express.Router();

/** 댓글 목록 가져오기 */
// GET /comment

/** 댓글 작성 */
// POST /comment/enrollment
// 입력란에 입력값이 없으면 예외처리 해주기 -> "댓글 내용을 입력해주세요"

/** 댓글 수정 */
// UPDATE /comment
// 수정란에 입력값이 없으면 예외처리 해주기 -> "댓글 내용을 입력해주세요"

/** 댓글 삭제 */
// DELETE /comment

module.exports = router;
