export default ({
  name: 'packageManager',
  type: 'string',
  prompt: {
    "type": 'list',
    "module": "inquirer"
  },
  alias: 'p',
  defaultValue: 'yarn',
  message: "Package manager ('npm', 'yarn' or 'pnpm')",
  choices: [{
    name: 'npm',
    value: 'npm'
  }, {
    name: 'yarn',
    value: 'yarn'
  }, {
    name: 'pnpm',
    value: 'pnpm'
  }]
})
