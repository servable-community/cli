import protocolIndex from "./protocolIndex.js"

export default async (props) => {
  const { protocolPath } = props

  const index = await protocolIndex(protocolPath)
  if (!index) {
    return
  }
  clinextbox.payload._protocolIndex = index

  clinextbox.payload.protocolId = index.id
  clinextbox.payload.description = index.author.description
  clinextbox.payload.license = index.license
  clinextbox.payload.name = index.name
  if (index.author) {
    clinextbox.payload.authorName = index.author.name
    clinextbox.payload.authorEmail = index.author.email
    clinextbox.payload.url = index.author.url
    clinextbox.payload.github = index.author.github
  }
  clinextbox.payload.repositoryUrl = ''
  clinextbox.payload.homepageUrl = ''
}
