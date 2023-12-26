
export default ({
  name: 'servable',
  description: 'Servable Framework CLI 🐻',
  options: [{
    name: 'quick',
    type: 'boolean',
    alias: 'q',
    description: 'Quick mode, skip all optional prompts and use defaults',
    global: true
  },
  {
    name: 'appMasterKey',
    type: 'string',
    promptType: 'input',
    alias: 'm',
    default: 'MASTER_KEY_TO_CHANGE',
    description: 'App master key'
  }],
  example: "$0",
  usage: 'Usage: servable <command>',
  handler: async ({ generator }) => {
    const { print, } = generator

    print.info('Servable 🐻🐝')

    const askAge = { type: 'input', name: 'age', message: 'How old are you?' }
    const askName = { type: 'input', name: 'name', message: 'Your name?', initial: 'Abou' }
    // multiple choice
    const askShoe = {
      type: 'select',
      name: 'shoe',
      message: 'What shoes are you wearing?',
      choices: ['Clown', 'Other'],
    }

    // ask a series of questions
    const questions = [askAge, askShoe, askName]
    const { age, shoe, name } = await generator.prompt.ask(questions)
  },
})
