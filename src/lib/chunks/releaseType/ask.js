export default async () => {
  await Clinext.prompt.ask([
    {
      name: 'releaseType',
    },
  ])
}
