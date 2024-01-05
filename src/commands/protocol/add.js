import ChunkProtocolContent from '../../lib/chunks/protocol/content/index.js'

export default ({
  _clinextType: "command",
  name: 'add',
  description: 'Add an empty protocol to a Servable app 🐝',
  options: [
    {
      name: 'appPath',
      message: "App to add a protocol to",
      // validators: [{ id: 'nonempty' }]
    },
    {
      name: 'protocolId',
      validators: [{
        id: 'nonEmpty'
      }]
    },
    {
      name: 'protocolDescription',
    },

    {
      name: 'license',
    },
  ],
  example: "$0 protocol eject",
  handler: async () => {
    await clinextbox.prompt.ask([
      {
        name: 'appPath',
      },
    ])

    await clinextbox.prompt.ask([
      {
        name: 'protocolId',
      },
    ])

    clinextbox.payload.destination = `${clinextbox.payload.appPath}/lib/protocols/${clinextbox.payload.protocolId}`

    let pass = await ChunkProtocolContent.ask()

    if (!pass) {
      return
    }

    await ChunkProtocolContent.write()
  },
})
