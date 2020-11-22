const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({
    products: [
      {
        _id: "1",
        image: "/images/p1.jpg",
        price: "1600",
        name: "Notebook Lenovo Thinkbook 13s I5/13,3/16gb/256gb- Oficial",
      },
      {
        _id: "2",
        image: "/images/p2.jpg",
        price: "270",
        name: "Tablet Lenovo 10 Tb-x505l Lte/ Ram 2gb/ Rom 16gb",
      },
      {
        _id: "3",
        image: "/images/p3.jpg",
        price: "160",
        name: "Monitor Lenovo Thinkvision S22e",
      },
      {
        _id: "4",
        image: "/images/p4.jpg",
        price: "999",
        name: "Aio Lenovo A540-24arr Ryzen3/8gb/1tb/24 - Nueva",
      },
      {
        _id: "5",
        image: "/images/p5.jpg",
        price: "1200",
        name: "Pc Lenovo Thinkcentre M720s Sff I5/12gb Ram/256gb Ssd",
      },
      {
        _id: "6",
        image: "/images/p6.jpg",
        price: "470",
        name: "Lenovo Chromebook 100e 11,6 - Oficial",
      },
    ],
  });
});

module.exports = router;
