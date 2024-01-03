
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
  transformers: {
    display: [{
      id: 'isFolderProtocol'
    }]
  }
  // transformer: (name,) => {
  //   if (!name || !name.length) {
  //     return name
  //   }

  //   const _name = name.split(path.sep).pop()
  //   const isServable = isFolderProtocolSync(name)
  //   return isServable ? `${chalk.underline(_name)} 🐝 ` : `${_name}`
  // }
})

