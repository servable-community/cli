
export default ({
  name: 'protocol',
  description: 'Protocol management. Please refer to the online documentation.',
  options: [
  ],
  handler: async ({ toolbox }) => {
    const { print, } = toolbox
    print.info('Protocol 🐻🐝')
  },
})
