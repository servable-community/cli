
export default async (props) => {
  const {
    destination = Clinext.payload.destination
  } = props

  const { payload } = Clinext
  await Clinext.fs.chunks.copy({
    destination,
    source: '**/*',
    data: {
      ...payload,
      appDescription: "My servable app",
    }
  })

  if (payload._adapter && payload._adapter.dockercompose) {
    await Clinext.fs.writeText({
      destination: `${destination}/lib/app/system/docker/docker-compose.yaml`,
      text: payload._adapter.dockercompose,
      data: {
        ...payload,
        appDescription: "My servable app",
        maxUploadSize: '100mb',
      }
    })
  }
}
