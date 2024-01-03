import * as dotenv from 'dotenv'
import axios from "axios"
dotenv.config()

export default ({
  name: 'login',
  description: `Login 🐻`,
  options: [
    {
      name: 'registryUsername',
      storeValue: true,
      loadFromStoreOnInit: true,
      storeDomain: process.env.SERVABLE_API_HOST
    },
    {
      name: 'registryPassword',
      storeDomain: process.env.SERVABLE_API_HOST
    },
    {
      name: 'registrySessionToken',
      storeValue: true,
      loadFromStoreOnInit: true,
      storeDomain: process.env.SERVABLE_API_HOST
    },
  ],
  example: "$0 registry auth login",
  handler: async ({ toolbox, }) => {
    const domain = toolbox.env.SERVABLE_API_HOST

    const username = toolbox.payload.registryUsername
    const password = toolbox.payload.registryPassword
    const sessionToken = toolbox.payload.sessionToken

    if (username && password && sessionToken) {
      toolbox.payload.registryUsername = username
      toolbox.payload.registryPassword = password
      toolbox.payload.sessionToken = sessionToken
      return true
    }

    await toolbox.prompt.ask([
      {
        name: 'registryUsername',
        defaultValue: username,
        store: true
      },
      {
        name: 'registryPassword',
        defaultValue: password,
        store: true
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

    toolbox.payload.registrySessionToken = result.sessionToken

    await toolbox.store.save({
      key: 'registrySessionToken',
      domain,
      value: toolbox.payload.registrySessionToken
    })

    return true
  },
})


const doLogin = async ({ username, password, }) => {
  const url = `${process.env.SERVABLE_API_HOST}/user/login`

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
