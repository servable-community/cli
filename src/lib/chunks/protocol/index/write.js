export default async (props) => {
  const { destination = clinextbox.payload.destination } = props

  clinextbox.payload.protocolCategories = clinextbox.payload.protocolCategories ? clinextbox.payload.protocolCategories : ''
  await clinextbox.fs.chunks.copy({
    destination,
    source: '**/*',
  })
}