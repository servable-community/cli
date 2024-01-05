
export default async (props) => {
  const {
    destination = clinextbox.payload.destination
  } = props

  const { payload } = clinextbox
  await clinextbox.fs.chunks.copy({
    destination,
    source: '**/*',
    data: {
      ...payload,
      appDescription: "My servable app",
    }
  })

  if (payload._adapter && payload._adapter.dockercompose) {
    await clinextbox.fs.writeText({
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
