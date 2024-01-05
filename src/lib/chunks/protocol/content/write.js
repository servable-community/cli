import ChunkIndex from '../index/index.js'
import ChunkTriggers from '../../triggers/index.js'

export default async (props = {}) => {
  const { destination = Clinext.payload.destination } = props

  Clinext.payload.protocolDescription = Clinext.payload.protocolDescription ? Clinext.payload.protocolDescription : ''
  Clinext.payload.author = Clinext.payload.author ? Clinext.payload.author : ''

  await Clinext.fs.chunks.copy({
    destination,
    source: '**/*',
  })

  await ChunkIndex.write({ destination })
  await ChunkTriggers.write({ destination })
}
