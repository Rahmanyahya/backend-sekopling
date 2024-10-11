import path from "path"
import fs from "fs"
import { root_dir } from "../config"

export function deleteImage(fileName: any) {
    let pathFile = path.join(root_dir,"private","photo-profile")
    let fileExist = fs.existsSync(pathFile)
    if (fileExist && fileName !== "") return fs.unlinkSync(pathFile)
}