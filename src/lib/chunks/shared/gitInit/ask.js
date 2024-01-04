
export default async () => {
  await clinextbox.prompt.ask(
    [
      {
        name: 'gitInit',
      },])
  return true
}
