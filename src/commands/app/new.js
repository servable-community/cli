import * as AppContent from '../../fractions/app/content/generic/index.js'

export default ({
  name: 'new',
  description: `Use a  Servable Community Protocol 🐝`,
  options: [
    {
      name: 'appName',
      type: 'string',
      promptType: 'input',
      alias: 'n',
      defaultValue: 'MyAppName',
      description: 'App name',
      validators: [{ id: 'nonEmpty', maxParams: 2 }]
    },
    {
      name: 'adapter',
      type: 'string',
      promptType: 'input',
      alias: 'a',
      defaultValue: '@servable/parse-server',
      description: 'Framework adapter to use',
      validators: [{ id: 'nonEmpty', maxParams: 12 }]
    },
    {
      name: 'install',
      type: 'boolean',
      promptType: 'input',
      alias: 'i',
      defaultValue: true,
      description: 'Install dependencies'
    }
  ],
  example: "$0 app new --appName='MyApp' --adapter='@servable/cli'",
  usage: 'Usage: servable <command>',
  handler: async ({ generator, payload }) => {
    const { print, } = generator
    print.info('Create a new app 🐻🐝')

    await AppContent.ask({ generator, payload })
    await AppContent.write({ generator, payload })
  },
})
