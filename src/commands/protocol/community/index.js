
export default ({
  name: 'community',
  description: 'Protocol community management',
  options: {
    appMasterKey: {
      type: 'string',
      promptType: 'input',
      alias: 'm',
      default: 'MASTER_KEY_TO_CHANGE',
      description: 'App master key'
    },
    appJavascriptKey: {
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

    print.info('Protocols community index 🐻🐝')

    const askAge = { type: 'input', name: 'age', message: 'How old are you?' }
    const askName = { type: 'input', name: 'name', message: 'Your name?', initial: 'Abou' }
    const v = await generator.prompt.ask(askAge)

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

    const isThe90s = await generator.prompt.confirm('Ya`ll ready for this?')
    const choices = ['red', 'green', 'cheese', 'bread']

    const result = await generator.prompt.ask([
      {
        type: 'select',
        name: 'exselect',
        message: 'What shoes are you wearing?',
        choices: ['Clown', 'Other'],
      },
      {
        type: 'confirm',
        name: 'exconfirm',
        message: 'Are you sure?',
      },
      {
        type: 'multiselect',
        name: 'exmultiselect',
        message: 'What are your favorite colors?',
        choices: ['red', 'blue', 'yellow'],
      },
      {
        type: 'select',
        name: 'exselect',
        message: 'What is your favorite team?',
        choices: ['Jazz', 'Trail Blazers', 'Lakers', 'Warriors'],
      },
      {
        type: 'multiselect',
        name: 'exmultiselect',
        message: 'What are your favorite months?',
        choices: ['January', 'July', 'September', 'November'],
      },
      {
        type: 'password',
        name: 'expassword',
        message: 'Enter a fake password',
      },
      {
        type: 'input',
        name: 'exinput',
        message: 'What is your middle name?',
      },
      {
        type: 'autocomplete',
        name: 'exautocomplete',
        message: 'State?',
        choices: ['Oregon', 'Washington', 'California'],
        // You can leave this off unless you want to customize behavior
        suggest(s, choices) {
          return choices.filter(choice => {
            return choice.message.toLowerCase().startsWith(s.toLowerCase())
          })
        },
      },
    ])



    print.info(`${age} ${shoe}`, result, isThe90s, choices, name)

    // const {
    //   template: { generate },
    // } = generator

    // await generate({
    //   template: 'model.ts.ejs',
    //   target: `models/${name}-model.ts`,
    //   props: { name },
    // })
  },
})
