import chalk from "chalk"

export default ({ generator }) => {
  return {
    drawSectionHeader: ({ title, subTitle }) => {
      generator.print.log(chalk.yellow(`\n${title} --------------`))
      generator.print.log(chalk.italic(`${subTitle}\n`))
    },
  }
}

