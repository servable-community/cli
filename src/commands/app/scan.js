
export default ({
  name: 'scan',
  description: `Scan app for conformity 🐝`,
  options: [
    {
      name: 'id',
      type: 'string',
      promptType: 'input',
      alias: 'i',
      defaultValue: '',
      description: 'Unique protocol id to import'
    }],
  example: "$0 protocol community use --id='protocolable'",
  usage: 'Usage: servable <command>',
  handler: async ({ generator, payload }) => {
    const { print, } = generator

    print.info('Use a community protocol 🐻🐝')

    const askAge = { type: 'input', name: 'age', message: 'How old are you?' }
    const askName = { type: 'input', name: 'name', message: 'Your name?', initial: 'Abou' }
    // multiple choice
    const askShoe = {
      type: 'select',
      name: 'shoe',
      message: 'What shoes are you wearing?',
      choices: ['Clown', 'Other'],
    }

    const f = generator.template.render('<%= people.join(", "); %>', { people: ['geddy', 'neil', 'alex'] })
    await generator.spawnCommand('git', ['add', '.',])
    // ask a series of questions
    const questions = [askAge, askShoe, askName]
    const { age, shoe, name } = await generator.prompt.ask(questions)
  },
})
