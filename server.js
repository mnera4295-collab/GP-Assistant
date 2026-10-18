const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// عرض واجهة GP
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// استقبال رسائل منير
app.post("/chat", (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({
      reply: "احكيلي يا منير، شو بدك؟"
    });
  }

  res.json({
    reply: `أهلًا منير! وصلتني رسالتك: ${message}`
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`GP is running on port ${PORT}`);
});
