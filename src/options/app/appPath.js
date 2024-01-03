import path from "path"
import isFolderServableAppSync from "../../lib/lib/isFolderServableAppSync.js"
import chalk from 'chalk'

export default ({
  _clinextType: "option",
  type: 'string',
  message: "Choose a Servable app",
  promptType: "file-tree-selection",
  name: "appPath",
  onlyShowDir: true,
  root: "./",
  onlyShowValid: false,
  enableGoUpperDirectory: true,
  hideRoot: false,
  hideChildrenOfValid: true,
  hideValidationErrorMessage: true,
  validators: [{
    id: 'isServableApp'
  }],
  transformer: (name,) => {
    if (!name || !name.length) {
      return name
    }

    const _name = name.split(path.sep).pop()
    //const isServable = (_name && _name.length && !['.'].includes(_name[0]))
    const isServable = isFolderServableAppSync(name)
    return isServable ? `${chalk.underline(_name)} 🐻` : `${_name}`
  }
})



