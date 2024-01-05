import ChunkShell from '../../lib/chunks/protocol/shell/index.js'
import fillPayloadWithProtocolIndex from '../../lib/newactions/fillPayloadWithProtocolIndex.js'
import removeEjectedProtocol from '../../lib/newactions/removeEjectedProtocol/index.js'
import updatePackageForEjectedProtocol from '../../lib/newactions/updatePackageForEjectedProtocol/index.js'


export default ({
  _clinextType: "command",
  name: 'eject',
  description: 'Eject a protocol 🐝',
  options: [
    {
      name: 'appPath',
      message: "App to eject from",
      // validators: [{ id: 'nonempty' }]
    },
    {
      name: 'protocolPath',
      message: "Protocol to eject",
      // validators: [{ id: 'nonempty' }]
    },
    {
      name: 'destination',
      message: "Where to eject",
      // validators: [{ id: 'nonempty' }]
    },
    {
      name: 'protocolDescription',
    },
    {
      name: 'packageManager',
    },
    {
      name: 'installDependencies',
    },
    {
      name: 'license',
    },
    {
      name: 'gitInit',
    },

    // {
    //   name: 'homepageUrl',
    // },
    // {
    //   name: 'authorName',
    // },
    // {
    //   name: 'authorEmail',
    // },
    // {
    //   name: 'authorUrl',
    // },
    // {
    //   name: 'authorGithubUrl',
    // },
    {
      name: 'releaseType',
    },
    {
      name: 'updateApp',
      type: 'boolean',
      promptType: 'confirm',
      defaultValue: true,
      message: 'Update app after ejection'
    }
  ],
  example: "$0 protocol eject",
  handler: async () => {
    await Clinext.prompt.ask([
      {
        name: 'appPath',
      },
    ])

    await Clinext.prompt.ask([
      {
        root: `${Clinext.payload.appPath}/lib/protocols`,
        name: 'protocolPath',
      },
    ])

    await fillPayloadWithProtocolIndex({ protocolPath: Clinext.payload.protocolPath })

    await Clinext.prompt.ask([
      {
        name: 'destination',
      },
    ])

    Clinext.payload.destination = `${Clinext.payload.destination}/${Clinext.payload.protocolId}`


    let pass = await ChunkShell.ask()

    if (!pass) {
      return
    }

    await ChunkShell.write()

    await Clinext.fs.copyAdvanced({
      destination: `${Clinext.payload.destination}/src`,
      source: `${Clinext.payload.protocolPath}/**/*`,
      rootSource: `${Clinext.payload.protocolPath}`,
      render: false
    })


    await Clinext.prompt.ask([
      {
        name: 'updateApp',
      },
    ])
    if (Clinext.payload.updateApp) {
      await updatePackageForEjectedProtocol({})
      await removeEjectedProtocol({})
    }
  },
})
