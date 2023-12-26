
import prompt from './prompt.js'
import template from './template.js'
import fs from './fs.js'
import CP from 'child_process'
export default ({ payload }) => {

  const generator = {
    payload,
    print: console,
  }

  generator.prompt = prompt({ generator })
  generator.template = template({ generator })
  generator.fs = fs({ generator })
  generator.spawnCommand = (command, args, options) => {
    return CP.spawn(command, args, options)
  }

  return generator
}

