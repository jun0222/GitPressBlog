// これを実行するとブログ記事がindex.mdに追記される
// ビルド先のブログ記事をrmで削除するものと、これの実行をまとめたshellscriptを作る
// 記事にタイムスタンプを入れたりとか工夫する
// セットアップコマンドとか展開してQiitaかZennにあげよう。
const fs = require('fs');
const path = "./posts/"

fs.readdir(path, (err, files) => {
  const filesR = files.reverse()
    for (let index = 1; index < filesR.length; index++) {
        const element = filesR[index];
        fs.readFile(path+element, { encoding: "utf8" }, (err, file) => {
            fs.appendFile("./docs/index.md", file+"\n", (err) =>{
                if (err) throw err;
                console.log("書き込みOK！");
            })
        });
    }
});



