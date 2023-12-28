
export default ({ option, yargs }) => {
  const { name, description, message, type = 'string', global = false, alias, defaultValue } = option

  yargs.option(name, {
    desc: description ? description : message,
    type,
    global,
    alias,
    default: defaultValue
  })
}
