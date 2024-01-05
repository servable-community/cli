export default async (props) => {
  const { destination } = props

  clinextbox.payload.protocolCategories = clinextbox.payload.protocolCategories ? clinextbox.payload.protocolCategories : ''
  await clinextbox.fs.chunks.copy({
    destination,
    source: '**/*',
  })
}
