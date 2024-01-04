export default async (props = {}) => {
  const {
    destination = clinextbox.payload.destination,
    useDefaultGitgnore = false,
  } = props


  if (useDefaultGitgnore) {
    await clinextbox.fs.chunks.copy({
      destination,
      source: '{.}gitignore',
    })
  }

  return clinextbox.git.init({ destination })
}
