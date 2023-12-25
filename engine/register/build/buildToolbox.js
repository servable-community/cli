import jetpack from 'fs-jetpack'
import ejs from 'ejs'
import ask from '../prompt/ask.js'
import Bluebird from "bluebird"
export default () => {

  const toolbox = {
    payload: {},
    print: console,
    filesystem: jetpack,
    prompt: {
      ask: async () => {

      },
      confirm: async () => {

      }
    },
    template: {
      generate: (source, destination) => {
        ejs.render("", {})
      }
    }
  }

  toolbox.prompt = {
    ask: async (value) => {
      const questions = Array.isArray(value) ? value : [value]
      const result = {}
      await Bluebird.Promise.mapSeries(
        questions,
        async question => {
          const v = await ask({
            options: question,
            payload: toolbox.payload,
            // programOptions: options,
            toolbox
          })
          result[question.name] = v
          return v
        })
      return result
    },
    confirm: async () => {

    }
  }

  return toolbox
}

