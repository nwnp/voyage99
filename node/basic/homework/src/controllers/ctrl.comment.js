const Comment = require("../schemas/comment");

const get = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ postId: postId });
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

const enrollment = async (req, res, next) => {
  try {
    const { postId, userName, comment } = req.body;
    if (comment === null || comment === undefined || comment === "") {
      return res.status(400).json({
        message: "댓글 내용을 입력해주세요.",
      });
    }
    const result = await Comment.create({
      postId,
      userName,
      comment,
    });
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const update = async (req, res, next) => {
  try {
    const { comment, id } = req.body;
    if (comment === null || comment === undefined || comment === "") {
      return res.status(400).json({
        message: "댓글 내용을 입력해주세요.",
      });
    }

    const result = await Comment.updateOne(
      { _id: id },
      {
        comment,
      }
    );
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const remove = async (req, res, next) => {
  try {
    const id = req.body.id;
    const result = await Comment.remove({ _id: id });
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = {
  get,
  update,
  enrollment,
  remove,
};
