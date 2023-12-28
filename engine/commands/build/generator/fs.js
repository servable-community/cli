import jetpack from 'fs-jetpack'
import fs from 'fs'
export default ({ generator }) => {

  return {
    ...jetpack,
    copy: async (source, destination) => {
      return fs.promises.cp(source, destination)
    },
    copyTpl: async (source, destination, data) => {
      const entry = await fs.promises.readFile(source)
      const result = ejs.render(entry, data)
      await fs.promises.writeFile(destination, result)
    }
  }
}

