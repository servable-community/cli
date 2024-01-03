
export default ({
  _clinextType: "command",
  name: 'eject',
  description: 'Eject a protocol 🐝',
  options: [
    {
      name: 'appPath',
      message: "op - App to eject from",
    },
    {
      name: 'protocolPath',
      message: "Protocol to eject",
    },
    {
      name: 'destination',
    },
    {
      name: 'installDependencies',
    },
    {
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
        name: 'appPath',
        message: "ha - App to eject from",
      },
    ])

    await toolbox.prompt.ask([
      {
        root: `${toolbox.payload.appPath}/lib/protocols`,
        name: 'protocolPath',
        message: "Protocol to eject",
      },
    ])

    await toolbox.prompt.ask([
      {
        name: 'destination',
        message: "Where to eject",
      },
    ])
  },
})
