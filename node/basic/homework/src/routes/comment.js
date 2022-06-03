const express = require("express");
const router = express.Router();

const ctrlComment = require("../controllers/ctrl.comment");

/** 댓글 목록 가져오기 */
// GET /comment/:postId
// 게시글에 등록된 댓글들 다 가져오는 API
router.get("/comment/:postId", ctrlComment.get);

/** 댓글 작성 */
// POST /comment/enrollment
// 입력란에 입력값이 없으면 예외처리 해주기 -> "댓글 내용을 입력해주세요"
router.post("/comment", ctrlComment.enrollment);

/** 댓글 수정 */
// UPDATE /comment
// 수정란에 입력값이 없으면 예외처리 해주기 -> "댓글 내용을 입력해주세요"
router.patch("/comment", ctrlComment.update);

/** 댓글 삭제 */
// DELETE /comment
router.delete("/comment", ctrlComment.remove);

module.exports = router;
