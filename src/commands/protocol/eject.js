
export default ({
  _type: "command",
  name: 'eject',
  description: 'Eject a protocol 🐝',
  options: [
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
    toolbox.ui.drawSectionHeader({
      type: 'h1',
      title: `Eject a protocol 🐻🐝🚀`,
    })

    console.log(toolbox.payload.destination)
    await toolbox.prompt.ask([
      {
        name: 'destination',
      },
    ])
    console.log(toolbox.payload.destination)
  },
})
