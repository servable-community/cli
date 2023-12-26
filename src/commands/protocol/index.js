
export default ({
  name: 'protocol',
  description: 'Protocol management. Please refer to the online documentation.',
  options: [
    {
      name: 'appMasterKeydde',
      type: 'string',
      promptType: 'input',
      alias: 'm',
      default: 'MASTER_KEY_TO_CHANGE',
      description: 'App master key'
    }],
  handler: async ({ generator }) => {
    const { print, } = generator

    print.info('Protocol 🐻🐝')

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
