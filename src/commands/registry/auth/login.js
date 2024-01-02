import * as dotenv from 'dotenv'
import axios from "axios"
dotenv.config()

export default ({
  name: 'login',
  description: `Login 🐻`,
  options: [
    {
      name: 'registryUsername',
    },
    {
      name: 'registryPassword',
    },
  ],
  example: "$0 registry auth login",
  handler: async ({ toolbox, }) => {
    toolbox.ui.drawSectionHeader({
      type: 'h1',
      title: `Login 🐻🐝🚀`,
    })

    const domain = toolbox.env.SERVABLE_API
    toolbox.print.info('domain', domain)

    const username = await toolbox.store.get({
      key: 'username',
      domain
    })
    const password = await toolbox.store.get({
      key: 'password',
      domain
    })
    let sessionToken = await toolbox.store.get({
      key: 'sessionToken',
      domain
    })

    toolbox.print.info('username', username,)

    if (username && password && sessionToken) {
      toolbox.payload.registryUsername = username
      toolbox.payload.registryPassword = password
      toolbox.payload.sessionToken = sessionToken

      return true
    }

    await toolbox.prompt.ask([
      {
        name: 'registryUsername',
        defaultValue: username
      },
      {
        name: 'registryPassword',
        defaultValue: password
      },
    ])

    const result = await doLogin({
      username: toolbox.payload.registryUsername,
      password: toolbox.payload.registryPassword
    })

    if (!result) {
      toolbox.print.info(`Could not connect to the Servable registry. Please try again later`)
      return false
    }

    toolbox.payload.sessionToken = result.sessionToken

    await toolbox.store.save({
      key: 'username',
      domain,
      value: toolbox.payload.registryUsername
    })

    await toolbox.store.save({
      key: 'password',
      domain,
      value: toolbox.payload.registryPassword
    })
    await toolbox.store.save({
      key: 'sessionToken',
      domain,
      value: toolbox.payload.sessionToken
    })

    return true
  },
})


const doLogin = async ({ username, password, }) => {
  const url = `${process.env.SERVABLE_API}/user/login`

  try {
    const result = await axios({
      method: "POST",
      url,
      headers: {
        "content-type": "application/json",
      },
      data: {
        username,
        password,
      }
    })

    return result.data
  } catch (e) {
    console.error(e)
  }

  return null
}
