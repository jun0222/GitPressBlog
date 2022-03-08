// これを実行するとファイル名逆順の配列が取れる
const fs = require('fs');
const path = "./oldDocs/"

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



