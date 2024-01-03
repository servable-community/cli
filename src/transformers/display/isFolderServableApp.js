import path from "path"
import chalk from 'chalk'
import isFolderServableAppSync from "../../lib/lib/isFolderServableAppSync"

export default ({
  type: "tranformer",
  position: "display",
  id: "isFolderServableApp",
  handler: ({ toolbox, input, item }) => {
    if (!input || !input.length) {
      return input
    }

    const _name = input.split(path.sep).pop()
    const isServable = isFolderServableAppSync(input)
    return isServable ? `${chalk.underline(_name)} 🐻` : `${_name}`
  }
})
