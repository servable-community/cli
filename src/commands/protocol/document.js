import { documentProtocol } from '@servable/manifest'

export default ({
  _clinextType: "command",
  name: 'document',
  description: 'Generate protocol documentation 🐝',
  options: [
    {
      name: 'protocolPath',
      message: "Protocol to document",
    },
  ],
  example: "$0 protocol eject",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'protocolPath',
      },
    ])
    await documentProtocol({
      path: CliNext.payload.protocolPath,
      write: true
    })
  },
})
