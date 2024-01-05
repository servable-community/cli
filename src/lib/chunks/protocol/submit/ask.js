/*---------------------------------------------------------
 * Copyright (C) Servable Community. All rights reserved.
 *--------------------------------------------------------*/

import protocolIndex from "../../../lib/protocolIndex.js"
import askForGeneric from "../../../prompts/utils/askForGeneric.js"
import create from "./lib/create.js"
import update from './lib/update.js'

export default async (props) => {
  const { toolbox, payload } = props

  const index = await protocolIndex(payload.targetProtocolPath)
  if (!index || !index.registry || !index.registry.id) {
    return create(props)
  }

  toolbox.log(`Your protocol ${index.id} has already been submitted as ${index.registry.id}`)
  if ((await askForGeneric({
    ...props, options: {
      ...props.options,
      type: 'confirm',
      name: 'registryUpdate',
    }
  }))) {
    return update(props)
  }

  return false
}



