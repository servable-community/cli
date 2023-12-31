export default ({
  name: 'gitInit',
  type: 'boolean',
  prompt: {
    "type": 'confirm',
    "module": "inquirer"
  },
  alias: 'g',
  defaultValue: true,
  message: "Initialize a git repository",
})
