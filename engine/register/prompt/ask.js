import inquirer from 'inquirer';

export default async (props) => {
  const {
    payload,
    options: {
      name,
      message,
      type = 'input',
      validate = validateNonEmpty,
      defaultValue },
    programOptions = {},
    launchedOptions = {} } = props

  const options = programOptions
  let _message = message
  let _defaultValue = defaultValue
  let _type = type
  const isQuick = launchedOptions['quick']

  if (name) {
    const option = options[name]
    if (option) {
      _message = _message ? _message : option.description
      _type = option.type
      _defaultValue = (_defaultValue === null || _defaultValue === undefined)
        ? option.default
        : _defaultValue
    }
  }


  const value = payload[name]
  if (!(value === null || value === undefined)) {
    return
  }

  if (isQuick && !(value === null || value === undefined)) {
    return
  }

  if (isQuick && !(_defaultValue === null || _defaultValue === undefined)) {
    payload[name] = _defaultValue
    return
  }

  payload[name] = (await inquirer.prompt({
    ...props.options,
    type,
    name,
    message: _message,
    default: value ? value : _defaultValue,
    validate
  }))[name]

  return payload[name]
}



const validateNonEmpty = name => {
  return name && name.length > 0
}
