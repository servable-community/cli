
export default ({
  name: 'use',
  description: 'Use a protocol',
  options: {
    'appMasterKey': {
      type: String,
      alias: 'm',
      default: 'MASTER_KEY_TO_CHANGE',
      description: 'App master key'
    },
    'appJavascriptKey': {
      type: String,
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
  handler: async ({ toolbox }) => {
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

    // ask a series of questions
    const questions = [askAge, askShoe, askName]
    const { age, shoe, name } = await toolbox.prompt.ask(questions)
  },
})
