// これを実行するとブログ記事がindex.mdに追記される
// readFile, appendFileだと記事の順番おかしくなるので同期処理メソッドを使用。
// 参考：https://jsprimer.net/use-case/nodecli/read-file/
const fs = require('fs');
const path = "./posts/"

fs.readdir(path, (err, files) => {
  const filesR = files.reverse()
    for (let index = 0; index < filesR.length-1; index++) {
        const element = filesR[index];
        const file = fs.readFileSync(path+element, { encoding: "utf8" }, (err, file) => {});
        fs.appendFileSync("./docs/index.md", file+"\n"+"\n"+"\n"+element.replace(".md","")+"\n"+"<hr>"+"\n", (err) =>{
            if (err) throw err;
            console.log("書き込みOK！");
        })
    }
    fs.appendFileSync("./docs/index.md", "<title>juns-blog</title>", (err) =>{
        if (err) throw err;
        console.log("書き込みOK！");
    })
});