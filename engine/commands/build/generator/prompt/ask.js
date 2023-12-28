import getValidators from './validators/index.js'
import Bluebird from "bluebird"
import chalk from "chalk"

export default async (props) => {
  const {
    payload,
    question,
    generator,
    promptModule,
    promptType } = props

  let {
    name,
    message,
    defaultValue,
    validators = [{ type: 'nonEmpty' }] } = question

  if (!name) {
    return
  }

  let value = payload[name]
  if (!value && question.alias) {
    value = payload[question.alias]
  }
  const valueIsDefined = !(value === null || value === undefined)
  if (valueIsDefined) {
    generator.print.log(`${chalk.green('✓')} ${chalk.bold(name)}: ${chalk.italic(value)}`)
    return
  }

  const isQuick = payload['quick'] || payload['q']
  if (isQuick && valueIsDefined) {
    generator.print.log(`${chalk.green('✓')} ${chalk.bold(name)}: ${chalk.italic(value)}`)
    return
  }

  if (isQuick && !(defaultValue === null || defaultValue === undefined)) {
    payload[name] = defaultValue
    generator.print.log(`${chalk.green('✓')} ${chalk.bold(name)}: ${chalk.italic(payload[name])}`)
    return
  }

  payload[name] = (await promptModule.prompt({
    ...props.question,
    type: promptType,
    name,
    message,
    default: value ? value : defaultValue,
    validate: async input => {
      let isValid = true
      await Bluebird.Promise.mapSeries(
        validators,
        async validator => {
          const validate = getValidators(validator)
          const _i = await validate({ input, ...validator })
          if (!_i) {
            isValid = false
          }
        })
      if (props.question.validate) {
        isValid = props.question.validate(input)
      }
      return isValid
    }
  }))[name]

  return payload[name]
}
