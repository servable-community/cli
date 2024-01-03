import path from "path"
import chalk from "chalk"
import fs from 'fs'

export default ({
  _clinextType: "option",
  type: 'string',
  message: "Choose a protocol",
  promptType: "file-tree-selection",
  name: "protocolPath",
  onlyShowDir: true,
  root: "./",
  onlyShowValid: false,
  enableGoUpperDirectory: true,
  hideRoot: false,
  hideChildrenOfValid: true,
  hideValidationErrorMessage: true,
  validators: [{
    id: 'isProtocol'
  }],
  transformer: (name,) => {
    if (!name || !name.length) {
      return name
    }

    const _name = name.split(path.sep).pop()
    const isServable = isFolderProtocolSync(name)
    return isServable ? `${chalk.underline.green(_name)} 🐝 ` : `${_name}`
  }
})


const isFolderProtocolSync = (folder) => {

  try {
    if (!(fs.existsSync(folder))) {
      return false
    }

    if (!fs.lstatSync(folder).isDirectory()) {
      return false
    }

    let content = fileContent(`${folder}/module.json`)
    if (!content) {
      content = fileContent(`${folder}/index.json`)
    }
    if (!content || !content.type) {
      return false
    }
    return content.type === 'protocol'
  } catch (e) {
    // console.error(e)
    return false
  }
}

const fileContent = (filePath) => {
  if (!(fs.existsSync(filePath))) {
    return null
  }

  const rawdata = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(rawdata)
}
