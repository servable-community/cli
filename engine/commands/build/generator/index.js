
import prompt from './prompt/index.js'
import template from './template.js'
import fs from './fs.js'
import cp from 'child_process'
import ui from './ui.js'
import _ from 'underscore'
import lodash from 'lodash'
import formatOptionForYargs from '../../../lib/formatOptionForYargs.js'

export default ({ payload, options = [], yargs }) => {

  const generator = {
    payload,
    print: console,
    options,
    // options
  }

  generator.options.forEach(option => formatOptionForYargs({ option, yargs }))

  generator.mergeOptions = (handlerOptions = []) => {

    generator.options = [
      ...(generator.options ? generator.options : []),
      ...handlerOptions
    ]


    generator.options = generator.options.map(option => {
      const i = _.findWhere(handlerOptions,
        { name: option.name })

      if (!i) {
        return option
      }

      let result = { ...option }
      lodash.merge(
        result,
        i,
      )
      return result
    })
    const difference = lodash.differenceBy(generator.options, handlerOptions, 'name')
    generator.options = lodash.concat(generator.options, difference)
    generator.options.forEach(option => formatOptionForYargs({ option, yargs }))
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
