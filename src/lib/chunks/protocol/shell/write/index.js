// import * as ChunkIndex from '../../index/index.js'
import * as ChunkReleaseType from '../../../shared/releaseType/index.js'
import * as ChunkPackageManager from '../../../shared/packageManager/index.js'

export default async (props) => {
  const { destination = clinextbox.payload.destination } = props
  clinextbox.payload.author = clinextbox.payload.author ? clinextbox.payload.author : ''

  await clinextbox.fs.chunks.copy({
    destination,
    source: '**/*',
  })

  // await ChunkIndex.write({ destination: `${destination}/src` })
  await ChunkReleaseType.write({ destination })
  await ChunkPackageManager.write({ destination })

  return true
}
