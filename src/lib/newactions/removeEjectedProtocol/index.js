/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/
import fs from 'fs';

export default async (props) => {
  const { protocolPath = clinextbox.payload.protocolPath } = props
  return fs.promises.rm(protocolPath, {
    recursive: true,
    force: true
  })
}
