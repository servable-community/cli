import ChunkIndex from '../index/index.js'
import ChunkReleaseType from '../../releaseType/index.js'
import ChunkPackageManager from '../../packageManager/index.js'
import ChunkGit from '../../gitInit/index.js'

export default async (props = {}) => {
  const {
    destination = clinextbox.payload.destination,
    askIndex = false
  } = props
  clinextbox.payload.author = clinextbox.payload.author ? clinextbox.payload.author : ''

  await clinextbox.fs.chunks.copy({
    destination,
    source: '**/*',
  })

  if (askIndex) {
    await ChunkIndex.write({ destination: `${destination}/src` })
  }

  await ChunkReleaseType.write({ destination })
  await ChunkPackageManager.write({ destination })
  if (clinextbox.payload.gitInit) {
    await ChunkGit.write({
      destination,
      useDefaultGitgnore: false
    })
  }
  return true
}
