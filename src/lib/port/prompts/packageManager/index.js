/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/


import askForGeneric from "../utils/askForGeneric.js"


export default async (props) => {
    const { generator, payload, options: { force = false } = {} } = props
    if (!force && payload.promptGroupsPassed.packageManager) {
        return
    }

    generator.ui.drawSectionHeader({
        generator,
        title: `Package manager 🧳`,
        subTitle: `Package manager for the project.`
    })

    await askForGeneric({
        ...props,
        options: {
            type: 'list',
            name: 'pkgManager',

            choices: [{
                name: 'npm',
                value: 'npm'
            }, {
                name: 'yarn',
                value: 'yarn'
            }, {
                name: 'pnpm',
                value: 'pnpm'
            }]
        }
    })

    payload.promptGroupsPassed.packageManager = true
}
