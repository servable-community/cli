
export default ({
  name: 'use',
  description: `Use a  Servable Community Protocol 🐝`,
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

  handler: async ({ toolbox, payload }) => {
    const { print, } = toolbox

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

    const f = toolbox.template.render('<%= people.join(", "); %>', { people: ['geddy', 'neil', 'alex'] })
    await toolbox.spawn('git', ['add', '.',])
    // ask a series of questions
    const questions = [askAge, askShoe, askName]
    const { age, shoe, name } = await toolbox.prompt.ask(questions)
  },
})
