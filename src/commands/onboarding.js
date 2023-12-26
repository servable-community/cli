
export default ({
  name: 'onboarding',
  description: 'Servable onboarding',
  handler: async ({ generator }) => {
    const { print, } = generator

    print.info('Welcome to Servable CLI js 🐻🐝')


  },
})
