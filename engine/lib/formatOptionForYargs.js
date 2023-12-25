
export default ({ option, yargs }) => {
  const { name, description, type, global = false, alias, defaultValue } = option
  let _type = 'string'

  switch (type) {
    default:
    case String: {
      _type = 'string'
    } break
    case Boolean: {
      _type = 'boolean'
    } break

  }
  yargs.option(name, {
    desc: description,
    type: _type,
    global,
    alias,
    default: defaultValue
  })
}
