
import ejs from 'ejs'
import { cleanProtocols } from '@servable/manifest'

export default async (props) => {
  const {
    folder,
    items,
    isTemplate
  } = props
  // if (false) {
  //     Engine.launchServable()
  // }

  try {
    const targetPath = `${folder}/class/protocols.js`
    let i = cleanProtocols(items)
    // let i = items
    i = i ? i : []
    let data = `export default ${JSON.stringify(items, null, 4)}`
    if (isTemplate) {
      data = await ejs.render(data, CliNext.payload, {
        async: true,
        strict: false
      })
    }
    CliNext.fs.write({ destination: targetPath, text: data, })
  } catch (e) {
    console.error(e)
  }
}
