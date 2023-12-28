/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/
import { fileURLToPath } from "url"
import { dirname } from "path"

// import writeClassContent from "../../../../class/content/generic/write/index.withprotocol.js"

export default async (props) => {
  const { generator, payload, destination } = props
  const destinator = v => `${destination}/${v}`
  generator.fs.copyFraction({
    // source: `${__dirname}/template/**/*`,
    destination: destinator('jsconfig.json'),
    source: `jsconfig.json`,
  })
}
