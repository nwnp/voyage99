const express = require("express");
const Goods = require("../schemas/goods");
const router = express.Router();

const getAllBooks = () => {
  return "hello world!";
};

//상품 목록 조회 API
router.get("/goods", async (req, res) => {
  const { category } = req.query;
  const goods = await Goods.find({ category });
  res.json({ goods });
});

router.get("/about", (req, res, next) => {
  res.send("<h2>This is About page</h2>");
});

router.get("/books", (req, res) => {
  res.json({ success: true, data: getAllBooks() });
});

// 상세 상품 조회
router.get("/goods/:goodsId", async (req, res) => {
  const { goodsId } = req.params;
  const goods = await Goods.findOne({ goodsId });
  res.json({ goods });
});

router.post("/goods", async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId });
  if (goods.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }

  const createdGoods = await Goods.create({
    goodsId,
    name,
    thumbnailUrl,
    category,
    price,
  });

  res.json({ goods: createdGoods });
});

router.get("/goods/cart", async (req, res) => {
  const carts = await Cart.find();
  const goodsIds = carts.map((cart) => cart.goodsId);

  const goods = await Goods.find({ goodsId: goodsIds });

  res.json({
    cart: carts.map((cart) => ({
      quantity: cart.quantity,
      goods: goods.find((item) => item.goodsId === cart.goodsId),
    })),
  });
});

router.put("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existsCarts = await Cart.find({ goodsId: Number(goodsId) });
  if (!existsCarts.length) {
    await Cart.create({ goodsId: Number(goodsId), quantity });
  } else {
    await Cart.updateOne({ goodsId: Number(goodsId) }, { $set: { quantity } });
  }

  res.json({ success: true });
});

module.exports = router;
