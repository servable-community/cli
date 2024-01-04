import capitalizeFirstLetter from '../../../../newlib/capitalizeFirstLetter.js'

export default async () => {

  await clinextbox.prompt.ask(
    [
      // {
      //   name: 'protocolName',
      // },
      {
        name: 'description',
      },
      // {
      //   name: 'homepageUrl',
      // },
      // {
      //   name: 'protocolDefaultSlug',
      // },
      // {
      //   name: 'protocolGithubId',
      // },
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
        name: 'license',
      },
    ])

  if (!clinextbox.payload.protocolName) {
    const name = capitalizeFirstLetter(clinextbox.payload.protocolId)
    clinextbox.payload.protocolName = name
  }
}
