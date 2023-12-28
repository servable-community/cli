
export default ({
  name: 'registry',
  description: `Registry 🪻`,
  options: [
  ],
  example: "$0 registry",

  handler: async ({ generator, payload }) => {
    generator.print.info('Registry 🐻🐝')
  },
})
