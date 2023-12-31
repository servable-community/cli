
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

  // await toolbox.fs.chunks.copy({
  //   // source: `${__dirname}/template/**/*`,
  //   destination: destinator('mix.json'),
  //   // source: `*.json`,
  //   source: 'jsconfig.json',
  //   data: {
  //     ...payload,
  //     appDescription: "My servable app",
  //     authorName: "My name",
  //   }
  // })






  // await toolbox.fs.copyFull({
  //   // source: `${__dirname}/template/**/*`,
  //   destination: destinator('temp'),
  //   // source: `*.json`,
  //   source: '**/*.{png,jpeg}'
  // })



}
