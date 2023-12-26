
export default ({ option, yargs }) => {
  const { name, description, type = 'string', global = false, alias, defaultValue } = option

  yargs.option(name, {
    desc: description,
    type,
    global,
    alias,
    default: defaultValue
  })
}
