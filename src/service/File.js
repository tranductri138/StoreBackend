import fs from "fs"

const isExistFile = (file) => {
    if(!fs.existsSync(file)) {
        fs.mkdirSync(file)
    }else {
        console.log(`Folder is Exists`)
    }
}

export {
    isExistFile
}