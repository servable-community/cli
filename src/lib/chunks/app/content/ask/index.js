// import askForProtocolIndex from "../../index/ask/index.js"
// import askForTriggers from "../../../../shared/triggers/ask/index.js"
// import validateNonMandatory from "../../../../../lib/validateNonMandatory.js"
// import valdiateNonEmpty from "../../../../../lib/valdiateNonEmpty.js"
// import askForGenericBulk from "../../../../../prompts/utils/askForGenericBulk.js"


import search from './api/search.js'
import getById from './api/getById.js'

export default async () => {

  Clinext.ui.drawSectionHeader({
    type: 'h2',
    title: `App informations 🚀`,
    subTitle: `Servable required general informations.`
  })

  await Clinext.prompt.ask([
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

  await Clinext.prompt.ask({
    name: 'bridgeframeworkId',
    suggestOnly: false,
    searchText: 'Searching...',
    emptyText: 'Nothing found!',
    source: search,
    pageSize: 10,
  })

  const item = await getById({ id: Clinext.payload['bridgeframeworkId'], })
  if (!item) {
    console.log('Could not find adapter in registry.')
    return false
  }

  Clinext.payload._adapter = item
  const { index } = item
  const hasUsage = (item && item.index.usage && item.index.usage.parameters && item.index.usage.parameters.length)
  if (hasUsage) {
    Clinext.ui.drawSectionHeader({
      title: `${index.id} parameters`,
      subTitle: `Fill this framework specific parameters.`
    })
    await Clinext.prompt.ask(item.index.usage.parameters)
    Clinext.ui.drawSectionHeader({
      title: `---`,
    })
  }

  return true
}




