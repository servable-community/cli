export default ({
  name: 'releaseType',
  type: 'string',
  promptType: 'list',
  alias: 'p',
  defaultValue: 'none',
  message: "Continuous release provider",
  choices: [{
    name: 'Github actions',
    value: 'github'
  },
  {
    name: 'Gitlab CI',
    value: 'gitlab'
  },
  {
    name: 'None',
    value: 'none'
  },]
})
