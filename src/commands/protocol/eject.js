import * as ChunkShell from '../../lib/chunks/protocol/shell/index.js'
import fillPayloadWithProtocolIndex from '../../lib/newactions/fillPayloadWithProtocolIndex.js'


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
    {
      name: 'description',
    },
    {
      name: 'homepageUrl',
    },
    {
      name: 'authorName',
    },
    {
      name: 'authorEmail',
    },
    {
      name: 'authorUrl',
    },
    {
      name: 'authorGithubUrl',
    },
    {
      name: 'releaseType',
    },
  ],
  example: "$0 protocol eject",
  handler: async () => {
    await clinextbox.prompt.ask([
      {
        name: 'appPath',
      },
    ])

    await clinextbox.prompt.ask([
      {
        root: `${clinextbox.payload.appPath}/lib/protocols`,
        name: 'protocolPath',
      },
    ])

    await fillPayloadWithProtocolIndex({ protocolPath: clinextbox.payload.protocolPath })

    await clinextbox.prompt.ask([
      {
        name: 'destination',
      },
    ])

    clinextbox.payload.destination = `${clinextbox.payload.destination}/${clinextbox.payload.protocolId}`


    let pass = await ChunkShell.ask()

    if (!pass) {
      return
    }

    await ChunkShell.write()

    await clinextbox.fs.copyAdvanced({
      destination: `${clinextbox.payload.destination}/src`,
      source: `${clinextbox.payload.protocolPath}/**/*`,
      rootSource: `${clinextbox.payload.protocolPath}`,
      render: false
    })

    // await updatePackageForEjectedProtocol({ clinextbox })
  },
})
