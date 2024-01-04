/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/
import { fileURLToPath } from "url"
import { dirname } from "path"

export default async (props) => {
    const { toolbox, payload, targetRootPath } = props
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    toolbox.fs.copy(`${__dirname}/template/**/*`, `${targetRootPath}/`)
}