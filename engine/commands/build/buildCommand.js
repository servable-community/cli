import parseArgv from 'tiny-parse-argv'
export default async ({
  path,
  generator,
  payload,
  fileName }) => {
  const data = (await import(path)).default
  const { name = '',
    description = '',
    // options = {},
    handler,
    example } = data

  // let nativeArgv = parseArgv(process.argv)
  // delete nativeArgv["--"]
  // delete nativeArgv["_"]
  // Object.keys(nativeArgv).forEach(n => {
  //   generator.payload[n] = nativeArgv[n]
  // })

  // const _options = (data.options && data.options.length)
  //   ? data.options
  //   : []
  // const options = _options.map(option => {
  //   const value = nativeArgv[option.name]

  //   return {
  //     ...option,
  //     value
  //   }
  // })
  // generator.mergeOptions(options)


  const command = {
    command: name,
    desc: description,
    builder: {},
    handler: (argv,) => {
      let nativeArgv = parseArgv(process.argv)
      delete nativeArgv["--"]
      delete nativeArgv["_"]
      Object.keys(nativeArgv).forEach(n => {
        payload[n] = nativeArgv[n]
      })

      const _options = (data.options && data.options.length)
        ? data.options
        : []
      const options = _options.map(option => {
        const value = nativeArgv[option.name]

        return {
          ...option,
          value
        }
      })
      generator.mergeOptions(options)
      data.handler({ generator, payload, argv })
    }
  }

  return {
    command,
    data: {
      ...data,
      options: (data.options && data.options.length) ? data.options : []
    }
  }
}
