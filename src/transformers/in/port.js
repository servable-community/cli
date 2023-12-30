import getPortOrRandom from "../../lib/port/getPortOrRandom.js"
import getPortNear from "../../lib/port/getPortNear.js"

export default ({
  id: "getPort",
  handler: async ({ generator, question, }) => {
    const { port } = question
    const { value, type } = port
    let _port = value
    switch (type) {
      case 'random': {
        _port = await getPortOrRandom({ port: _port })
      } break
      case 'near':
      default: {
        _port = await getPortNear({ port: _port })
        break
      }
    }

    return {
      ...question,
      defaultValue: _port
    }
  }
})
