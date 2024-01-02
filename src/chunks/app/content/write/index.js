
export default async (props) => {
  const { toolbox, payload, destination } = props
  const destinator = v => v ? `${destination}/${v}` : `${destination}`

  await toolbox.fs.chunks.copy({
    destination,
    source: '**/*',
    data: {
      ...payload,
      appDescription: "My servable app",
    }
  })

  if (payload._adapter && payload._adapter.dockercompose) {
    await toolbox.fs.writeText({
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
