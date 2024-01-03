
export default ({
  _type: "option",
  type: 'string',
  alias: 'd',
  message: "Choose a destination",
  promptType: "file-tree-selection",
  name: "destination",
  onlyShowDir: true,
  root: "./",
  onlyShowValid: false,
  enableGoUpperDirectory: true,
  hideRoot: false,
  hideChildrenOfValid: true,
  hideValidationErrorMessage: true,
})
