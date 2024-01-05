
export default async () => {
  await Clinext.prompt.ask(
    [
      {
        name: 'packageManager',
      },
      {
        name: 'installDependencies',
      }])
  return true
}
