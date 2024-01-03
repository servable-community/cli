/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/

import projectPackageJson from "./lib/projectPackageJson.js"

export default async (props) => {
    const { toolbox, payload, } = props

    const projectFolder = payload.desiredWriteDestinationPathAbsolute
    const protocolTargetFolder = payload.protocolTargetFolder
    const protocolId = payload.targetProtocol

    const packageJson = await projectPackageJson(projectFolder)
    if (!packageJson) {
        return
    }

    packageJson.dependencies = {
        ...(packageJson.dependencies ? packageJson.dependencies : {}),
        [protocolId]: `file:${protocolTargetFolder}`
    }

    const packageJsonPath = `${projectFolder}/package.json`
    toolbox.fs.writeJSON(toolbox.destinationPath(packageJsonPath), packageJson)
}
