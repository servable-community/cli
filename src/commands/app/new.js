import * as AppContent from '../../fractions/app/content/generic/index.js'

export default ({
  name: 'new',
  description: `Create a Servable app 🐻`,
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
      defaultValue: '@servable/parse-server-adapter',
      message: 'Framework adapter to use',
      validators: [{ type: 'nonEmpty', params: { maxParams: 12 } }]
    },
    {
      name: 'installDependencies',
    }, {
      name: 'license',
    },
    // {
    //   name: 'appId',
    //   type: 'string',
    //   prompt: {
    //     "type": 'input',
    //   },
    //   alias: 'n',
    //   defaultValue: 'MyAppID',
    //   message: 'App name',
    //   validators: [{ type: 'nonEmpty', params: { maxParams: 12 } }]
    // },
  ],
  example: "$0 app new --appName='MyApp' --adapter='@servable/cli'",
  handler: async ({ generator, payload }) => {
    generator.ui.drawSectionHeader({
      type: 'h1',
      title: `Create a new Servable app with any adapter 🐻🐝🚀`,
    })

    const passed = await AppContent.ask({ generator, payload })
    if (!passed) {
      return
    }

    await AppContent.write({
      generator,
      payload,
      targetRootPath: payload.destination
    })
  },
})
