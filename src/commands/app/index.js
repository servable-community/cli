
export default ({
  name: 'app',
  description: `App 🐻`,
  options: [
  ],
  example: "$0 app new --appName='MyApp' --adapter='@servable/cli'",

  handler: async ({ generator, payload }) => {
    generator.print.info('App 🐻🐝')
  },
})
