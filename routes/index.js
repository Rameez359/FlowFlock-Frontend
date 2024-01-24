var express = require("express");
var router = express.Router();
const accountCtrl = require("../controllers/accountsCtrl");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/signupWithGoogle", async (req, res, next) => {
  const response = await fetch("http://localhost:3000/auth/google/callback", {
    method: "GET",
    credentials: "include",
    headers: {
      // Add headers if needed
      // 'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your_token',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  res.json(response);
});

module.exports = router;
