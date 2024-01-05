export default async (props = {}) => {
  const {
    destination = Clinext.payload.destination,
    useDefaultGitgnore = false,
  } = props


  if (useDefaultGitgnore) {
    await Clinext.fs.chunks.copy({
      destination,
      source: '{.}gitignore',
    })
  }

  return Clinext.git.init({ destination })
}
