import jetpack from 'fs-jetpack'
import fs from 'fs'
import getFileCallerURL from '../lib/getFileCallerURL.js'
import _path from 'path'
import fg from 'fast-glob'
import isGlob from 'is-glob'
import ejs from 'ejs'
import Bluebird from "bluebird"
import ensureDirectoryExists from '../lib/ensureDirectoryExists.js'


export default async ({ toolbox }) => {

  toolbox.fs.chunks = {
    copy: async ({
      source,
      destination = toolbox.payload.destination,
      data = toolbox.payload,
      options = { mark: true },
    }) => {
      let rootSource = source
      let _source = source

      let sou = getFileCallerURL()
      sou = _path.dirname(sou)
      sou = sou.replace('file://', '')
      rootSource = `${sou}/template`
      _source = `${sou}/template/${_source}`

      const _isGlob = isGlob(source)
      const entries = await fg([_source], options,)

      await Bluebird.Promise.mapSeries(
        entries,
        async entry => {
          // await Promise.all(entries.map(async entry => {
          let _destination = _isGlob
            ? entry.replace(rootSource, destination)
            : destination

          _destination = _destination.replace("{.}", ".")
          await ensureDirectoryExists(_destination)
          const copyFile = async () => {
            try {
              return jetpack.copyAsync(entry, _destination, { overwrite: true })
            } catch (e) {
              console.error(e)
            }
          }
          if (!data) {
            return copyFile()
          }

          try {
            const content = await fs.promises.readFile(entry, 'utf8')
            const result = ejs.render(content, data)
            return fs.promises.writeFile(_destination, result)
          } catch (e) {
            return copyFile()
          }
          // }))
        })
    }
  }
}

