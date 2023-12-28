import jetpack from 'fs-jetpack'
import fs from 'fs'
import buildCommand from './buildCommand.js'
import formatOptionForYargs from '../../lib/formatOptionForYargs.js'

const operation = async ({ path, generator, yargs, root = false, payload }) => {
  const candidates = await jetpack.listAsync(path)
  if (!candidates || !candidates.length) {
    return
  }

  const commands = []
  let index = null

  let subCommands = []

  await Promise.all(candidates.map(async item => {
    const __path = `${path}/${item}`
    const stat = await fs.promises.stat(__path)
    if (!stat || !stat.isDirectory()) {
      return null
    }

    const subCommand = await operation({ path: __path, generator, payload })
    subCommands.push(subCommand)
  }))

  await Promise.all(candidates.map(async item => {
    const __path = `${path}/${item}`
    const stat = await fs.promises.stat(__path)
    if (!stat || stat.isDirectory()) {
      return null
    }

    const { data: commandData, command } = await buildCommand({ path: __path, generator, fileName: item, payload })

    if (item === 'index.js') {
      return
    }

    command.builder = yargs => {
      commandData.options.forEach(option => formatOptionForYargs({ option, yargs }))
      if (commandData.example) {
        yargs.example(commandData.example)
      }
    }
    if (commandData.usage) {
      // command.usage(commandData.usage)
    }
    commands.push(command)

  }))

  await Promise.all(candidates.map(async item => {
    const __path = `${path}/${item}`
    const stat = await fs.promises.stat(__path)
    if (!stat || stat.isDirectory()) {
      return null
    }

    if (item !== 'index.js') {
      return
    }

    const { data: commandData, command } = await buildCommand({ path: __path, generator, fileName: item, payload })

    if (!root) {
      command.builder = yargs => {
        commandData.options.forEach(option => formatOptionForYargs({ option, yargs }))
        if (commandData.example) {
          yargs.example(commandData.example)
        }
        commands.forEach(subCommand => {
          yargs.command(subCommand)
        })
        subCommands.forEach(subCommand => {
          yargs.command(subCommand.index)
        })
      }
    }
    else {
      subCommands.forEach(subCommand => {
        yargs.command(subCommand.index)
      })
    }


    index = command
  }))

  return { index, commands }
}

export default operation
