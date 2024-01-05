export default async (props) => {
  const { destination = Clinext.payload.destination } = props
  await Clinext.fs.chunks.copy({
    destination,
    source: '**/*',
  })
}
