
export default ({
  name: 'registry',
  description: `Registry 🪻`,
  options: [
  ],
  example: "$0 registry",
  usage: 'Usage: servable <command>',
  handler: async ({ generator, payload }) => {
    generator.print.info('Registry 🐻🐝')
  },
})
