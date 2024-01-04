/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/
import fs from 'fs';

export default async (props) => {
    const { toolbox, payload, } = props
    const sourcePath = payload.targetProtocolPath
    // toolbox.fs.delete(sourcePath)
    return fs.promises.rm(sourcePath, { recursive: true, force: true })
}
