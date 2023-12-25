import registerPrompts from './prompt/register.js'
import buildToolbox from './build/buildToolbox.js'
import buildDir from './build/index.js'

export default async ({ path, yargs, }) => {
  registerPrompts()
  const toolbox = buildToolbox()
  const { index, commands } = await buildDir({ path, toolbox, yargs, root: true })
  // yargs.command(index)
  commands.forEach(command => {
    yargs.command(command)
  })

  const d = yargs.argv
  return commands
}
