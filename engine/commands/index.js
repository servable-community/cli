import buildGenerator from './build/generator/index.js'
import buildDir from './build/index.js'

export default async ({ path, yargs, options }) => {

  const commandsPath = `${path}/commands`
  const payload = {}
  const generator = buildGenerator({ payload, options, yargs })
  const { index, commands } = await buildDir({ path: commandsPath, generator, yargs, root: true, payload })
  // yargs.command(index)
  commands.forEach(command => {
    yargs.command(command)
  })

  const d = yargs.argv

  return commands
}
