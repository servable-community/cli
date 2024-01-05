export default async (props) => {
  const { destination = Clinext.payload.destination } = props
  switch (Clinext.payload.releaseType) {
    case 'github': {
      await Clinext.fs.chunks.copy({
        destination,
        source: '.github/**/*',
      })
    } break
    case 'gitlab': {
      await Clinext.fs.chunks.copy({
        destination,
        source: 'gitlab-ci.yml',
      })
    } break
    default: {

    } break
  }
}
