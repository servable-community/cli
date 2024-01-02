export default ({
  _type: "option",
  type: 'string',
  alias: 'd',
  message: "Choose destination",
  promptType: "file-tree-selection",
  name: "destination",
  onlyShowDir: true,
  root: ".",
  onlyShowValid: true,
  hideRoot: true,
  validate: (name,) => {
    if (!name || !name.length) {
      return false
    }
    return isFolderProtocolSync(name)
  },
})



import fs from 'fs'

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
