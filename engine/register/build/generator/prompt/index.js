import ask from './ask.js'
import Bluebird from "bluebird"

export default ({ generator }) => {

  return {
    ask: async (value) => {
      const questions = Array.isArray(value) ? value : [value]
      const result = {}
      await Bluebird.Promise.mapSeries(
        questions,
        async question => {
          let fullQuestion = question
          const items = generator.options.filter(a => a.name === question.name)
          if (items && items.length) {
            fullQuestion = {
              ...items[0],
              ...fullQuestion
            }
          }
          const v = await ask({
            question: fullQuestion,
            payload: generator.payload,
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

