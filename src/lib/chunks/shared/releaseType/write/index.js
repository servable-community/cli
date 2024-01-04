export default async (props) => {
  const { destination = clinextbox.payload.destination } = props
  switch (clinextbox.payload.releaseType) {
    case 'github': {
      await clinextbox.fs.chunks.copy({
        destination,
        source: '.github/**/*',
      })
    } break
    case 'gitlab': {
      await clinextbox.fs.chunks.copy({
        destination,
        source: 'gitlab-ci.yml',
      })
    } break
    default: {

    } break
  }
}
