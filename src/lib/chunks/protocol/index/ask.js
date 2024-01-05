import capitalizeFirstLetter from '../../../newlib/capitalizeFirstLetter.js'

export default async () => {

  await clinextbox.prompt.ask(
    [
      // {
      //   name: 'protocolName',
      // },
      {
        name: 'protocolDescription',
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
        name: 'license',
      },
    ])

  if (!clinextbox.payload.protocolName) {
    const name = capitalizeFirstLetter(clinextbox.payload.protocolId)
    clinextbox.payload.protocolName = name
  }

  if (!clinextbox.payload.protocolHomepageUrl) {
    clinextbox.payload.protocolHomepageUrl = ""
  }

  if (!clinextbox.payload.protocolDefaultSlug) {
    clinextbox.payload.protocolDefaultSlug = clinextbox.payload.protocolId
  }

  if (!clinextbox.payload.protocolHowTo) {
    clinextbox.payload.protocolHowTo = ""
  }

  // if (!clinextbox.payload.protocolFrameworkBridge) {
  //   clinextbox.payload.protocolHomepageUrl = "@servable-community/parse-server-adapter"
  // }

  if (!clinextbox.payload.protocolIconUrl) {
    clinextbox.payload.protocolIconUrl = ""
  }

  if (!clinextbox.payload.authorName) {
    clinextbox.payload.authorName = ""
  }

  if (!clinextbox.payload.authorEmail) {
    clinextbox.payload.authorEmail = ""
  }

  if (!clinextbox.payload.authorUrl) {
    clinextbox.payload.authorUrl = ""
  }

  if (!clinextbox.payload.authorGithubUrl) {
    clinextbox.payload.authorGithubUrl = ""
  }

  if (!clinextbox.payload.repositoryUrl) {
    clinextbox.payload.repositoryUrl = ""
  }
}
