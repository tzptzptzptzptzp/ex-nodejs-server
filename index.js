const http = require("http");

// ポート番号の定義
const PORT = 8000;

// HTTPサーバーの作成
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  // 返却するコンテンツを設定
  res.write("<h1>Hello World</h1>");
  // レスポンスの送信を完了
  res.end();
});

// サーバーを起動
server.listen(PORT, () => {
  console.log(`Server Running http://localhost:${PORT}`);
});
