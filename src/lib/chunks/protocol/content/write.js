import ChunkIndex from '../index/index.js'
import ChunkTriggers from '../../triggers/index.js'

export default async (props = {}) => {
  const { destination = clinextbox.payload.destination } = props

  clinextbox.payload.protocolDescription = clinextbox.payload.protocolDescription ? clinextbox.payload.protocolDescription : ''
  clinextbox.payload.author = clinextbox.payload.author ? clinextbox.payload.author : ''

  await clinextbox.fs.chunks.copy({
    destination,
    source: '**/*',
  })

  await ChunkIndex.write({ destination })
  await ChunkTriggers.write({ destination })
}
