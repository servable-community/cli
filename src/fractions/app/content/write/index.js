/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/

// import writeClassContent from "../../../../class/content/generic/write/index.withprotocol.js"

export default async (props) => {
  const { generator, payload, destination } = props
  const destinator = v => v ? `${destination}/${v}` : `${destination}`

  await generator.fs.fractions.copy({
    destination,
    source: '**/*',
    data: {
      ...payload,
      appDescription: "My servable app",
      authorName: "My name"
    }
  })

  // await generator.fs.fractions.copy({
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






  // await generator.fs.copyFull({
  //   // source: `${__dirname}/template/**/*`,
  //   destination: destinator('temp'),
  //   // source: `*.json`,
  //   source: '**/*.{png,jpeg}'
  // })



}