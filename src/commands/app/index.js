
export default ({
  name: 'app',
  description: `App 🐻`,
  options: [
  ],
  example: "$0 app new --appName='MyApp' --adapter='@servable/cli'",

  handler: async ({ toolbox, payload }) => {
    toolbox.print.info('App 🐻🐝')
  },
})
