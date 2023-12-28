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
      },
      alias: 'n',
      defaultValue: 'MyAppName',
      message: 'App name',
      validators: [{ type: 'nonEmpty', params: { maxParams: 12 } }]
    },
    {
      name: 'appDescription',
      type: 'string',
      prompt: {
        "type": 'input',
      },
      defaultValue: 'A Servable app',
      message: 'App description',
      validators: [{ type: 'nonEmpty', params: { maxParams: 12 } }]
    },
    {
      name: 'adapterId',
      type: 'string',
      prompt: {
        "type": 'autocomplete',
        // "module": "inquirer"
      },
      alias: 'a',
      defaultValue: '@servable/parse-server',
      message: 'Framework adapter to use',
      validators: [{ type: 'nonEmpty', params: { maxParams: 12 } }]
    },
    {
      name: 'installDependencies',
    }, {
      name: 'license',
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
