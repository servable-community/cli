export default async (props) => {
  const { destination } = props
  switch (payload.releaseType) {
    case 'github': {
      await clinextbox.fs.chunks.copy({
        destination,
        source: 'github/**/*',
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
