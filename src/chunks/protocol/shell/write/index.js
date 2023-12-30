/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/
import { fileURLToPath } from "url"
import { dirname } from "path"
import writeReleaseType from "../../releaseType/write/index.js"

export default async (props) => {

    const { toolbox, payload, targetRootPath } = props
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    payload.protocolDescription = payload.protocolDescription ? payload.protocolDescription : ''
    payload.author = payload.author ? payload.author : ''

    const defaultTargetPath = `${payload.targetFolder}/${payload.protocolId}`
    const destinator = targetRootPath ? v => `${targetRootPath}/${v}` : v => `${defaultTargetPath}/${v}`

    payload.protocolTargetFolder = targetRootPath
    payload.doubleDestination = targetRootPath
    // updateDestination(targetPath)
    const localPath = v => `${__dirname}/template/${v}`
    toolbox.fs.copyTpl(localPath('package.json'), destinator(`package.json`), payload)
    toolbox.fs.copy(localPath('gitignore'), destinator(`.gitignore`))
    toolbox.fs.copy(localPath('npmignore'), destinator(`.npmignore`))
    toolbox.fs.copy(localPath('editorconfig'), destinator(`.editorconfig`,))
    toolbox.fs.copy(localPath('eslintrc'), destinator(`.eslintrc`,))
    toolbox.fs.copy(localPath('prettierrc'), destinator(`.prettierrc`,))
    // toolbox.fs.copy(localPath('yarnrc'), destinator(`.yarnrc`,)
    toolbox.fs.copy(localPath('eslintignore'), destinator(`.eslintignore`,))
    // toolbox.fs.copy(localPath('npmrc-pnpm'), destinator(`.npmrc-pnpm`,)
    toolbox.fs.copy(localPath('releaserc'), destinator(`.releaserc`,))
    toolbox.fs.copy(localPath('LICENSE'), destinator(`LICENSE`,))
    toolbox.fs.copy(localPath('jest.config.json'), destinator(`jest.config.json`,))

    // toolbox.fs.copyTpl(localPath('README.md'), destinator(`README.md`), payload)

    await writeReleaseType(props)
}
