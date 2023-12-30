
export default ({
  name: 'registry',
  description: `Registry 🪻`,
  options: [
  ],
  example: "$0 registry",

  handler: async ({ toolbox, payload }) => {
    toolbox.print.info('Registry 🐻🐝')
  },
})
