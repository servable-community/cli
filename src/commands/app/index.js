
export default ({
  name: 'app',
  description: `App 🐻`,
  options: [
  ],
  example: "$0 app new --appName='MyApp' --adapter='@servable/cli'",
  usage: 'Usage: servable <command>',
  handler: async ({ generator, payload }) => {
    generator.print.info('App 🐻🐝')
  },
})
