import loginIfNecessary from "../../../lib/newlib/auth/login/loginIfNecessary.js"
import chalk from 'chalk'

export default ({
  _clinextType: 'command',
  name: 'submit',
  description: `Use a protocol`,
  options: [
  ],
  handler: async () => {
    const isLoggedIn = await loginIfNecessary()
    if (!isLoggedIn) {
      console.log(`🔴`, chalk.bold.red(`You are not logged in.`))
      return
    }


  }
})
