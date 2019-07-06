const fs = require('fs') // Read JSON!
const dialog = require('electron').remote

function openJSON() {
    let filepaths = dialog.showOpenDialog({
        title: '打开文件',
        filters: [{
            name: 'JSON',
            extensions: ['json']
        }],
        properties: ['openFile', "showHiddenFiles"]
    })
    try {
        if (filepaths != undefined && filepaths[0]) {
            fs.readFile(filepaths[0], (err, data) => {
                console.log("Reading file: " + filepaths[0])
                if (err) {
                    console.error(err)
                } else {
                    console.log("error: " + err + ", data: " + data)
                    stulist = JSON.parse(data)
                    students.list = stulist.data
                    appTitle.className = stulist.class
                    setDocTitle(stulist.class)
                    randmodal.revert()
                    M.toast({
                        html: '打开成功'
                    })

                }
            })
        }
    } catch (e) {
        M.toast({
            html: "读取文件时错误：" + '<br>' + e
        })
    }
}
function saveJSON(){
    let filepaths = dialog.showSaveDialog({
        title: "保存文件",
        filters: [{
            name: 'JSON',
            extensions: ['json']
        }],
        defaultPath: stulist.class + ".json"
    }, (callback) => {
        if (callback != undefined && callback) {
            let dir = callback.split(new RegExp(/\\/))
            dir = dir[dir.length - 1].split('.')
            stulist.class = dir[0]
            setDocTitle(dir[0])
            console.log("Saving to: " + callback)
            fs.writeFile(callback, JSON.stringify(stulist), (err) => {
                if (err) {
                    console.error(err)
                } else {
                    M.toast({
                        html: '保存成功'
                    })
                }
            })
        }
    })
}