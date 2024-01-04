export default async () => {
  await clinextbox.prompt.ask([
    {
      name: 'releaseType',
    },
  ])
}
