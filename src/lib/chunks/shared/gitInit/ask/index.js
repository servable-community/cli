
export default async () => {
  await Clinext.prompt.ask(
    [
      {
        name: 'gitInit',
      },])
  return true
}
