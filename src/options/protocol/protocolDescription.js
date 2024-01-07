
export default ({
  _clinextType: "option",
  name: 'protocolDescription',
  type: 'string',
  promptType: 'input',
  message: 'Protocol description',
  defaultValue: '',
  transformers: {
    display: ["capitalizeFirstLetter"],
    out: ["capitalizeFirstLetter"]
  }
})
