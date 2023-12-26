
export default ({
  name: 'eject',
  description: 'Eject a protocol',
  options: {
    'appMasterKey': {
      type: 'string',
      promptType: 'input',
      alias: 'm',
      default: 'MASTER_KEY_TO_CHANGE',
      description: 'App master key'
    },
    'appJavascriptKey': {
      type: 'string',
      promptType: 'input',
      alias: 'j',
      default: 'JAVASCRIPT_KEY_TO_CHANGE',
      description: 'App javascript key'
    },
  },
  params: {
    name: {
      type: "string",
      demandOption: true,
      describe: "Contact name",
    },
    phone: {
      type: "string",
      describe: "Contact phone",
    },
  },
  handler: async ({ generator }) => {
    const { print, } = generator

    print.info('Eject js 🐻🐝')

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
