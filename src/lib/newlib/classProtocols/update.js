
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
    let _items = cleanProtocols(items)
    // let i = items
    _items = _items ? _items : []

    let content = JSON.stringify(_items, null, 4)
    if (isTemplate) {
      content = content.replace(/\<{\{(.*?)\}\}>/g, function (match, token) {
        let parts = token.split('|')
        parts = parts.map(i => {
          if (!i) {
            return ""
          }
          return i.trim()
        })

        const key = parts[0]
        const defaultValue = parts[1]
        if (CliNext.payload[key] !== undefined) {
          return `<%= ${key} %>`
        }
        return `${defaultValue}`
      })
    }

    let data = `export default ${content}`
    data = await ejs.render(data, CliNext.payload, {
      async: true,
      strict: false
    })

    CliNext.fs.writeText({ destination: targetPath, text: data, })
  } catch (e) {
    console.error(e)
  }
}
