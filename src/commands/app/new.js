import * as AppContent from '../../fractions/app/content/generic/index.js'

export default ({
  name: 'new',
  description: `Create a Servable app 🐝`,
  options: [
    {
      name: 'appName',
      type: 'string',
      prompt: {
        "type": 'input',
        "module": "inquirer"
      },
      alias: 'n',
      defaultValue: 'MyAppName',
      description: 'App name',
      validators: [{ type: 'nonEmpty', params: { maxParams: 12 } }]
    },
    {
      name: 'appDescription',
      type: 'string',
      prompt: {
        "type": 'input',
        "module": "inquirer"
      },
      alias: 'n',
      defaultValue: 'A Servable app',
      description: 'App description',
      validators: [{ type: 'nonEmpty', params: { maxParams: 12 } }]
    },
    {
      name: 'adapter',
      type: 'string',
      prompt: {
        "type": 'input',
        "module": "inquirer"
      },
      alias: 'a',
      defaultValue: '@servable/parse-server',
      description: 'Framework adapter to use',
      validators: [{ type: 'nonEmpty', params: { maxParams: 12 } }]
    },
    {
      name: 'install',
      type: 'boolean',
      prompt: {
        "type": 'input',
        "module": "inquirer"
      },
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
