/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/
import { fileURLToPath } from "url"
import { dirname } from "path"


export default async (props) => {
    const { toolbox, payload, targetRootPath } = props
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    let destinator = props.destinator
    if (!destinator) {
        destinator = targetRootPath ? v => `${targetRootPath}/${v}` : toolbox.destinationPath.bind(toolbox)
    }

    payload.protocolCategories = payload.protocolCategories ? payload.protocolCategories : ''
    toolbox.fs.copyTpl(`${__dirname}/template/index.md`, destinator(`index.md`), payload)
    toolbox.fs.copyTpl(`${__dirname}/template/index.json`, destinator(`index.json`), payload)
}
