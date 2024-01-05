import protocolIndex from "./protocolIndex.js"

export default async (props) => {
  const { protocolPath } = props

  const index = await protocolIndex(protocolPath)
  if (!index) {
    return
  }
  Clinext.payload._protocolIndex = index

  Clinext.payload.protocolId = index.id
  Clinext.payload.description = index.author.description
  Clinext.payload.license = index.license
  Clinext.payload.name = index.name
  if (index.author) {
    Clinext.payload.authorName = index.author.name
    Clinext.payload.authorEmail = index.author.email
    Clinext.payload.url = index.author.url
    Clinext.payload.github = index.author.github
  }
  Clinext.payload.repositoryUrl = ''
  Clinext.payload.homepageUrl = ''
}
