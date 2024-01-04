// import * as ChunkIndex from '../../index/index.js'
import * as ChunkReleaseType from '../../../shared/releaseType/index.js'
import * as ChunkPackageManager from '../../../shared/packageManager/index.js'

export default async () => {
  // let passes = await ChunkIndex.ask()
  let passes = await ChunkReleaseType.ask()
  passes = await ChunkPackageManager.ask()
  return passes
}
