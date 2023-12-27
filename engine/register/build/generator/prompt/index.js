import ask from './ask.js'
import Bluebird from "bluebird"
import defaultPromptModule from './defaultPromptModule.js'

import inquirerPromptAutocomplete from 'inquirer-autocomplete-prompt'
import inquirerFileTreeSelection from 'inquirer-file-tree-selection-prompt'
import inquirerParseJsonFile from 'inquirer-parse-json-file'

export default ({ generator }) => {

  const prompt = {
    ask: async (value) => {
      const questions = Array.isArray(value) ? value : [value]
      const result = {}
      await Bluebird.Promise.mapSeries(
        questions,
        async question => {
          let fullQuestion = {
            ...question
          }
          const items = generator.options.filter(a => a.name === question.name)
          if (items && items.length) {
            fullQuestion = {
              ...items[0],
              ...fullQuestion
            }
          }
          const { type: promptType = 'input',
            module: promptModule = defaultPromptModule()
          } = question.prompt ? question.prompt : {}

          const v = await ask({
            question: fullQuestion,
            payload: generator.payload,
            generator,
            promptModule,
            promptType
          })

          result[question.name] = v
          return v
        })
      return result
    },
    confirm: async () => {

    },
    registerPrompt: (promptModule, key, module) => {
      promptModule.registerPrompt(key, module)
    }
  }

  const promptModule = defaultPromptModule()
  prompt.registerPrompt(promptModule, 'autocomplete', inquirerPromptAutocomplete)
  prompt.registerPrompt(promptModule, 'file-tree-selection', inquirerFileTreeSelection)
  prompt.registerPrompt(promptModule, 'json-file', inquirerParseJsonFile)

  return prompt
}

