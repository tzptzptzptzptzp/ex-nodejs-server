const http = require("http");
const html_index = require("fs").readFileSync("./index.html");
const html_404 = require("fs").readFileSync("./404.html");

// ポート番号の定義
const PORT = 8000;

// HTTPサーバーの作成
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // リクエストがルートパスの場合
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    // 返却するコンテンツを設定
    res.write(html_index);
    // レスポンスの送信を完了
    res.end();
  } else {
    // リクエストがルートパス以外の場合
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    // 返却するコンテンツを設定
    res.write(html_404);
    // レスポンスの送信を完了
    res.end();
  }
});

// サーバーを起動
server.listen(PORT, () => {
  console.log(`Server Running http://localhost:${PORT}`);
});
