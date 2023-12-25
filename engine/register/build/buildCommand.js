
export default async ({
  path,
  toolbox,
  fileName }) => {
  const data = (await import(path)).default
  const { name = '',
    description = '',
    options = {},
    handler,
    example } = data

  const command = {
    command: name,
    desc: description,
    builder: {},
    handler: (argv) => {
      data.handler({ toolbox, argv })
    }
  }

  return {
    command,
    data: {
      ...data,
      options: (data.options && data.options.length) ? data.options : [],
      // examples: (data.examples && data.examples.length) ? data.examples : [],
    }
  }
}
