
export default ({
  name: 'document',
  description: `Document Servable with the manifest. Allows for a README to be generated 🐝`,
  options: [
    {
      name: 'appMasterKey',
      type: 'string',
      promptType: 'input',
      alias: 'm',
      defaultValue: 'MASTER_KEY_TO_CHANGE',
      description: 'App master key'
    }],
  example: "$0 document --name='Doable'",

  handler: async ({ toolbox }) => {
    const { print, } = toolbox

    print.info('Document Servable CLI js 🐻🐝')

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
