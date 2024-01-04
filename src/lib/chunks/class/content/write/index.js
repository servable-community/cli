/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/
import { fileURLToPath } from "url"
import { dirname } from "path"

import writeForTriggers from "../../../../shared/triggers/write/index.js"

export default async (props) => {

    const { toolbox, payload, targetRootPath } = props
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    const destinator = v => `${targetRootPath}/${v}`
    const originator = v => `${__dirname}/template/${v}`

    if (payload.classBootstrapFiles) {
        toolbox.fs.copy(originator('**/*'), destinator(''))
        toolbox.fs.copyTpl(originator('class/index.js'), destinator(`class/index.js`), payload)
        toolbox.fs.copyTpl(originator('index.json'), destinator(`index.json`), payload)
        toolbox.fs.copyTpl(originator('README.md'), destinator(`README.md`), payload)
    }

    await writeForTriggers({ ...props })
}
