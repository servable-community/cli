import capitalizeFirstLetter from '../../../newlib/capitalizeFirstLetter.js'

export default async () => {

  await Clinext.prompt.ask(
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

  if (!Clinext.payload.protocolName) {
    const name = capitalizeFirstLetter(Clinext.payload.protocolId)
    Clinext.payload.protocolName = name
  }

  if (!Clinext.payload.protocolHomepageUrl) {
    Clinext.payload.protocolHomepageUrl = ""
  }

  if (!Clinext.payload.protocolDefaultSlug) {
    Clinext.payload.protocolDefaultSlug = Clinext.payload.protocolId
  }

  if (!Clinext.payload.protocolHowTo) {
    Clinext.payload.protocolHowTo = ""
  }

  // if (!Clinext.payload.protocolFrameworkBridge) {
  //   Clinext.payload.protocolHomepageUrl = "@servable-community/parse-server-adapter"
  // }

  if (!Clinext.payload.protocolIconUrl) {
    Clinext.payload.protocolIconUrl = ""
  }

  if (!Clinext.payload.authorName) {
    Clinext.payload.authorName = ""
  }

  if (!Clinext.payload.authorEmail) {
    Clinext.payload.authorEmail = ""
  }

  if (!Clinext.payload.authorUrl) {
    Clinext.payload.authorUrl = ""
  }

  if (!Clinext.payload.authorGithubUrl) {
    Clinext.payload.authorGithubUrl = ""
  }

  if (!Clinext.payload.repositoryUrl) {
    Clinext.payload.repositoryUrl = ""
  }

  return true
}
