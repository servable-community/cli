
export default ({
  _type: "command",
  name: 'eject',
  description: 'Eject a protocol 🐝',
  options: [
    {
      name: 'protocolPath',
      message: "Protocol to eject",
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
    toolbox.ui.drawSectionHeader({
      type: 'h1',
      title: `Eject a protocol 🐻🐝🚀`,
    })


    await toolbox.prompt.ask([
      {
        name: 'protocolPath',
        message: "Protocol to eject",
      },
    ])
  },
})
