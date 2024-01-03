
export default ({
  _clinextType: "command",
  name: 'eject',
  description: 'Eject a protocol 🐝',
  options: [
    {
      name: 'protocolPath',
      message: "Protocol to eject",
    },
    {
      name: 'destination',
    },
    {
      name: 'installDependencies',
    }, {
      name: 'license',
    },
    {
      name: 'packageManager',
    },
    {
      name: 'gitInit',
    },
  ],
  example: "$0 protocol eject",
  handler: async ({ toolbox, }) => {
    await toolbox.prompt.ask([
      {
        name: 'destination',
        message: "Where to eject",
      },
    ])

    await toolbox.prompt.ask([
      {
        name: 'protocolPath',
        message: "Protocol to eject",
      },
    ])
  },
})
