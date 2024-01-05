export default async (props) => {
  const { destination = clinextbox.payload.destination } = props
  await clinextbox.fs.chunks.copy({
    destination,
    source: '**/*',
  })
}
