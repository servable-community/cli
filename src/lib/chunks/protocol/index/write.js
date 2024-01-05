export default async (props) => {
  const { destination = Clinext.payload.destination } = props

  Clinext.payload.protocolCategories = Clinext.payload.protocolCategories ? Clinext.payload.protocolCategories : ''
  await Clinext.fs.chunks.copy({
    destination,
    source: '**/*',
  })
}
