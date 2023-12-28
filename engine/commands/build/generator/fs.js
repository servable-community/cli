import jetpack from 'fs-jetpack'
import fs from 'fs'
import getFileCallerURL from '../../../lib/getFileCallerURL.js'
import _path from 'path'

export default ({ generator }) => {

  return {
    ...jetpack,
    copy: async ({ source, destination, useRelativeCall = false }) => {
      return fs.promises.cp(source, destination)
    },
    copyTpl: async (source, destination, data) => {
      const entry = await fs.promises.readFile(source)
      const result = ejs.render(entry, data)
      await fs.promises.writeFile(destination, result)
    },
    copyFraction: async ({ source, destination, data, useRelativeCall = true }) => {
      let _source = source
      if (useRelativeCall) {
        let sou = getFileCallerURL()
        sou = _path.dirname(sou)
        sou = sou.replace('file://', '')
        _source = `${sou}/template/${_source}`
      }

      const re = await jetpack.copyAsync(_source, destination, { overwrite: true })
      return re
      // return fs.promises.copyFile(_source, destination)
    },
  }
}

