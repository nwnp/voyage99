const Post = require("../schemas/post");

const get = async (req, res, next) => {
  try {
    const posts = await Post.find();
    const postIds = posts.map((post) => post.id);
    const results = await Post.find({ id: postIds }).sort({ createdAt: -1 });
    const result = results.map((post) => {
      return {
        id: post.id,
        title: post.title,
        userName: post.userName,
        createdAt: post.createdAt,
      };
    });
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
};

const enrollment = async (req, res, next) => {
  try {
    const { title, userName, content } = req.body;
    const newPost = await Post.create({
      title,
      userName,
      content,
    });
    return res.status(200).json({ newPost });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
};

const detail = async (req, res, next) => {
  try {
    const { id } = req.body;
    const post = await Post.find({ _id: id });
    const result = post.map((post) => {
      return {
        id: post.id,
        title: post.title,
        userName: post.userName,
        content: post.content,
        createdAt: post.createdAt,
      };
    });
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
};

const update = async (req, res, next) => {
  try {
    const { id, title, userName, content } = req.body;
    const result = await Post.updateOne(
      { _id: id },
      {
        title,
        userName,
        content,
      }
    );
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
};

const remove = async (req, res, next) => {
  try {
    const id = req.params.postId;
    const result = await Post.remove({ _id: id });
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
};

module.exports = {
  get,
  enrollment,
  detail,
  update,
  remove,
};
