export default async (props) => {
  const { destination = clinextbox.payload.destination,
    installDependencies = clinextbox.payload.installDependencies,
    packageManager = clinextbox.payload.packageManager
  } = props

  switch (packageManager) {
    case 'yarn': {
      await clinextbox.fs.chunks.copy({
        destination,
        source: '{.}yarnrc',
      })
    } break
    case 'pnpm': {
      await clinextbox.fs.chunks.copy({
        destination,
        source: '{.}npmrc-pnpm',
      })
    } break
    default: {

    } break
  }


  if (installDependencies) {
    await clinextbox.installDependencies({ destination, packageManager })
  }
}
