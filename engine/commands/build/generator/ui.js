import chalk from "chalk"

export default ({ generator }) => {
  return {
    drawSectionHeader: ({ title, subTitle, type = 'text' }) => {
      switch (type) {
        case 'h1': {
          generator.print.log(`\n`)
          generator.print.log(chalk.white.bgRed.bold(`${title}`))
          if (subTitle) {
            generator.print.log(chalk.italic(`${subTitle}\n`))
          }
          generator.print.log(`----`)
          generator.print.log(``)
        } break
        case 'h2': {
          generator.print.log(`\n`)
          generator.print.log(chalk.white.bgGreen.bold(`${title}`))
          if (subTitle) {
            generator.print.log(chalk.italic(`${subTitle}\n`))
          }
        } break
        default: {
          generator.print.log(chalk.blue.bold(`\n${title}`))
          if (subTitle) {
            generator.print.log(chalk.italic(`${subTitle}\n`))
          }
        } break
      }


    },
  }
}

