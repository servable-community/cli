/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/

import projectPackageJson from "./lib/projectPackageJson.js"

export default async (props) => {

  const {
    appPath = Clinext.payload.appPath,
    destination = Clinext.payload.destination,
    protocolId = Clinext.payload.protocolId,
  } = props

  const packageJson = await projectPackageJson(appPath)
  if (!packageJson) {
    return
  }

  packageJson.dependencies = {
    ...(packageJson.dependencies ? packageJson.dependencies : {}),
    [protocolId]: `file:${destination}`
  }

  const packageJsonPath = `${appPath}/package.json`
  return Clinext.fs.writeJSON({ text: packageJson, destination: packageJsonPath })
}
