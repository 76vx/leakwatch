console.log("Iniciando servidor...");
require("dotenv").config();
const express = require("express");
const { scanRepo } = require("./scanner");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("C:\\Users\\andre\\Leakwatch\\gitsecret-scanner\\public"));
app.post("/scan", async (req, res) => {
  const { owner, repo } = req.body;

  if (!owner || !repo) {
    return res.status(400).json({ error: "owner y repo son requeridos" });
  }

  const findings = await scanRepo(owner, repo);
  res.json({ findings, total: findings.length });
});

app.listen(PORT, () => {
  console.log(`LeakWatch corriendo en http://localhost:${PORT}`);
});