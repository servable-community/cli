export default ({
  name: 'license',
  type: 'string',
  prompt: {
    "type": 'list',
    "module": "inquirer"
  },
  alias: 'l',
  defaultValue: 'MIT',
  message: 'License',
  choices: [
    "Apache 2.0",
    "MIT",
    "Mozilla Public License 2.0",
    "BSD 2-Clause (FreeBSD) License",
    "BSD 3-Clause (FreeBSD) License",
    "Internet Systems Consortium (ISC) License",
    "GNU AGPL 3.0",
  ],
})