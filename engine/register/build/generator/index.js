
import prompt from './prompt/index.js'
import template from './template.js'
import fs from './fs.js'
import cp from 'child_process'
import ui from './ui.js'

export default ({ payload }) => {

  const generator = {
    payload,
    print: console,
  }

  generator.ui = ui({ generator })
  generator.prompt = prompt({ generator })
  generator.template = template({ generator })
  generator.fs = fs({ generator })
  generator.spawn = async (command, args, options) => {
    return new Promise(resolve => {
      const result = cp.spawn(command, args, options)
      result.on('close', () => {
        resolve()
      })
    })
  }

  return generator
}
