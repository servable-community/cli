export default async (props) => {
  const { destination = Clinext.payload.destination,
    installDependencies = Clinext.payload.installDependencies,
    packageManager = Clinext.payload.packageManager
  } = props

  await Clinext.fs.chunks.copy({
    destination,
    source: '{.}npmignore',
  })

  switch (packageManager) {
    case 'yarn': {
      await Clinext.fs.chunks.copy({
        destination,
        source: '{.}yarnrc',
      })
    } break
    case 'pnpm': {
      await Clinext.fs.chunks.copy({
        destination,
        source: '{.}npmrc-pnpm',
      })
    } break
    default: {

    } break
  }


  if (installDependencies) {
    await Clinext.packagerManager.installDependencies({ destination, packageManager })
  }
}
