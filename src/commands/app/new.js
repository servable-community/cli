import * as AppContent from '../../fractions/app/content/index.js'

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
      validators: [{ id: 'nonempty', params: { maxParams: 12 } }]

    },
    {
      name: 'appDescription',
      type: 'string',
      prompt: {
        "type": 'input',
      },
      defaultValue: 'A Servable app',
      message: 'App description',
      validators: [{ id: 'nonempty', params: { maxParams: 12 } }]
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
      validators: [{ id: 'nonempty', params: { maxParams: 12 } }]
    },
    {
      name: 'installDependencies',
    }, {
      name: 'license',
    },
    {
      name: 'appPort',
      type: 'number',
      prompt: {
        type: 'input',
        transformers: [{
          id: "getPort"
        }],

      },
      port: { value: 1387 },
      message: 'App port',
      validators: [{
        id: 'nonEmpty', params: { maxParams: 12 }
      },
      {
        id: 'isnumber', params: { maxParams: 12 }
      },]
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
      destination: payload.destination
    })
  },
})
