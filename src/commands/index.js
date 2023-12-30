
export default ({
  name: 'servable',
  description: 'Servable Framework CLI 🐻',
  options: [
    {
      name: 'quick',
      type: 'boolean',
      alias: 'q',
      description: 'Quick mode, skip all optional prompts and use defaults',
      global: true
    },
    {
      name: 'verbose',
      type: 'boolean',
      alias: 'v',
      description: 'Be more verbose',
      global: true
    },
    {
      name: 'dry-run',
      type: 'boolean',
      alias: 'n',
      description: 'Dry run',
      global: true
    },
    {
      name: 'destination',
      type: 'string',
      alias: 'd',
      message: 'Destination',
      global: true
    }],
  example: "$0",
  handler: async ({ toolbox }) => {
    const { print, } = toolbox
    print.info('Servable 🐻🐝')
  },
})
