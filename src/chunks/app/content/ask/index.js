// import askForProtocolIndex from "../../index/ask/index.js"
// import askForTriggers from "../../../../shared/triggers/ask/index.js"
// import validateNonMandatory from "../../../../../lib/validateNonMandatory.js"
// import valdiateNonEmpty from "../../../../../lib/valdiateNonEmpty.js"
// import askForGenericBulk from "../../../../../prompts/utils/askForGenericBulk.js"


import search from './api/search.js'
import getById from './api/getById.js'

export default async (props) => {
  const { toolbox, payload } = props
  toolbox.ui.drawSectionHeader({
    type: 'h2',
    title: `App informations 🚀`,
    subTitle: `Servable required general informations.`
  })

  await toolbox.prompt.ask([
    {
      name: 'appPort',
    },
    {
      name: 'destination',
    },
    {
      name: 'appName',
    },
    {
      name: 'license',
    },
    {
      name: 'packageManager',
    },
    {
      name: 'gitInit',
    },
  ])

  await toolbox.prompt.ask({
    name: 'adapterId',
    suggestOnly: false,
    searchText: 'Searching...',
    emptyText: 'Nothing found!',
    source: search,
    pageSize: 4,
    validate(val) {
      return val ? true : 'Type something!'
    },
    transformer: (name,) => {
      if (!name) {
        return name
      }

      return name
    }
  })
  const item = await getById({ id: payload['adapterId'] })
  payload._adapter = item
  const { index } = item
  const hasUsage = (item && item.index.usage && item.index.usage.parameters && item.index.usage.parameters.length)
  if (hasUsage) {
    toolbox.ui.drawSectionHeader({
      title: `${index.id} parameters`,
      subTitle: `Fill this framework specific parameters.`
    })
    await toolbox.prompt.ask(item.index.usage.parameters)
    toolbox.ui.drawSectionHeader({
      title: `---`,
    })
  }

  return true
}




