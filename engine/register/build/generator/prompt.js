import ask from '../../prompt/ask.js'
import Bluebird from "bluebird"

export default ({ generator }) => {

  return {
    ask: async (value) => {
      const questions = Array.isArray(value) ? value : [value]
      const result = {}
      await Bluebird.Promise.mapSeries(
        questions,
        async question => {
          const v = await ask({
            options: question,
            payload: generator.payload,
            // programOptions: options,
            generator
          })
          result[question.name] = v
          return v
        })
      return result
    },
    confirm: async () => {

    }
  }
}

