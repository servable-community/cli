
export default async () => {
  await clinextbox.prompt.ask(
    [
      {
        name: 'packageManager',
      },
      {
        name: 'installDependencies',
      }])
  return true
}
