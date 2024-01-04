/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/

import projectPackageJson from "./lib/projectPackageJson.js"

export default async (props) => {

  const {
    appPath = clinextbox.payload.appPath,
    destination = clinextbox.payload.destination,
    protocolId = clinextbox.payload.protocolId,
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
  return clinextbox.fs.writeText({ text: packageJson, destination: packageJsonPath })
}
