import ChunkIndex from '../index/index.js'
import ChunkReleaseType from '../../releaseType/index.js'
import ChunkPackageManager from '../../packageManager/index.js'
import ChunkGit from '../../gitInit/index.js'

export default async (props = {}) => {
  const {
    destination = Clinext.payload.destination,
    askIndex = false
  } = props
  Clinext.payload.author = Clinext.payload.author ? Clinext.payload.author : ''

  await Clinext.fs.chunks.copy({
    destination,
    source: '**/*',
  })

  if (askIndex) {
    await ChunkIndex.write({ destination: `${destination}/src` })
  }

  await ChunkReleaseType.write({ destination })
  await ChunkPackageManager.write({ destination })
  if (Clinext.payload.gitInit) {
    await ChunkGit.write({
      destination,
      useDefaultGitgnore: false
    })
  }
  return true
}
