/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/
import askForGeneric from "../utils/askForGeneric.js"

export default async (props) => {
    const { generator, payload,
    } = props

    // if (generator._destinationRoot) {
    //     payload.targetFolder = generator._destinationRoot
    //     return
    // }

    generator.ui.drawSectionHeader({
        generator,
        title: `Target folder 🚀`,
        subTitle: `Choose the folder in your filesystem.`
    })

    await askForGeneric({
        ...props, options: {
            ...props.options,
            type: "file-tree-selection",
            name: "targetFolder",
            message: "Choose the folder in your filesystem",
            onlyShowDir: true,
            enableGoUpperDirectory: true,
            // root: generator._destinationRoot,
            // onlyShowValid: true,
            hideRoot: false,
            default: generator._destinationRoot
        }
    })
}
