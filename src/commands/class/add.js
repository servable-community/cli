import Chunk from '../../lib/chunks/class/content/index.js'

export default ({
  _clinextType: "command",
  name: 'add',
  description: 'Add an empty class to a protocol 🐝',
  options: [
    {
      name: 'protocolPath',
      message: "Protocol to add a class to",
      // validators: [{ id: 'nonempty' }]
    },
    {
      name: 'className',
      validators: [{
        id: 'nonEmpty'
      }]
    },
    {
      name: 'classDescription',
      validators: [{
        id: 'nonEmpty'
      }]
    },
    {
      name: 'license',
    },
  ],
  example: "$0 class new",
  handler: async () => {
    let pass = await Chunk.ask()

    if (!pass) {
      return
    }

    await Chunk.write()
  },
})
