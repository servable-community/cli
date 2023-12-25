
export default ({
  name: 'onboarding',
  description: 'Servable onboarding',
  handler: async ({ toolbox }) => {
    const { print, } = toolbox

    print.info('Welcome to Servable CLI js 🐻🐝')


  },
})
