// import askForProtocolIndex from "../../index/ask/index.js"
// import askForTriggers from "../../../../shared/triggers/ask/index.js"
// import validateNonMandatory from "../../../../../lib/validateNonMandatory.js"
// import valdiateNonEmpty from "../../../../../lib/valdiateNonEmpty.js"
// import askForGenericBulk from "../../../../../prompts/utils/askForGenericBulk.js"

export default async (props) => {
  const { generator, payload } = props
  generator.ui.drawSectionHeader({
    generator,
    title: `App informations 🚀`,
    subTitle: `Servable required general informations.`
  })

  await generator.prompt.ask([
    {
      name: 'appName',
    },
    {
      name: 'adapter',
    },
    {
      name: 'appDescription',
    },
    // {
    //   name: 'appMasterKey',
    // },
    // {
    //   name: 'appJavascriptKey',
    // }
  ])

  // await askForAppInfos(props)
  // await askForLicense(props)
  // await askForDatabase(props)
  // await askForAppCache(props)
  // await askForLiveQueryServer(props)
  // await askForLocalMinioPrompts(props)
  // await askForDashboard(props)
  // await askForDistribution(props)
  // await askForConfiguration(props)
  // await askForPackageManager(props)
  // await askForGit(props)
}




