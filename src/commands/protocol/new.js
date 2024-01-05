import ChunkShell from '../../lib/chunks/protocol/shell/index.js'

export default ({
  _clinextType: "command",
  name: 'new',
  description: 'Create a protocol project 🐝',
  options: [
    {
      name: 'protocolId',
      validators: [{
        id: 'nonEmpty'
      }]
    },
    {
      name: 'destination',
      message: "Where to create",
      transformers: {
        out: [{
          template: `<%= destination %>/<%= protocolId %>`
        }]
      }
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
      name: 'protocolDescription',
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

  ],
  example: "$0 protocol eject",
  handler: async () => {

    await Clinext.prompt.ask([
      {
        name: 'protocolId',
      },
    ])

    await Clinext.prompt.ask([
      {
        name: 'destination',

      },
    ])

    // Clinext.payload.destination = `${Clinext.payload.destination}/${Clinext.payload.protocolId}`


    let pass = await ChunkShell.ask({ askIndex: true })

    if (!pass) {
      return
    }

    await ChunkShell.write({ askIndex: true })
  },
})
