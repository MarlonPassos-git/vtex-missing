import fs from "fs"
import { openSchemaTmpDir } from "../constants"

type Params = {
    encoding: string
    content: string
    name: string
}

export function createTmpDirIfNotExists() {
    if (fs.existsSync(openSchemaTmpDir)) return 
    fs.mkdirSync(openSchemaTmpDir)
}

export function createFileFrontBase64(metaData: Params) {
    createTmpDirIfNotExists()
    const _path = `${openSchemaTmpDir}/${metaData.name}`
    const base64 = metaData.content

    fs.writeFileSync(_path, base64, metaData.encoding)

    return _path 
}