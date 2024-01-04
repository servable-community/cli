/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/

import protocolIndex from "../../../../../lib/protocolIndex.js"


export default async (props) => {
    const { payload, toolbox, path, mode } = props

    try {

        const index = await protocolIndex(payload.targetProtocolPath)
        index.registry = {
            id: payload.registryUniqueRef
        }
        const targetPath = `${payload.targetProtocolPath}/index.json`
        toolbox.fs.writeJSON(targetPath, index)
        return true
    } catch (e) {
        console.error(e)
    }

    return false
}

