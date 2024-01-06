import * as dotenv from 'dotenv';
import axios from "axios";
dotenv.config()

export default async ({ payload, username, password, sessionToken = null, mode, uniqueRef }) => {
  const url = `${process.env.SERVABLE_API_HOST}/submitprotocol`

  try {
    const result = await axios({
      method: "POST",
      url,
      headers: {
        "content-type": "application/json",
      },
      data: {
        ...payload,
        username,
        password,
        sessionToken,
        mode,
        uniqueRef
      }
    })

    return result.data
  } catch (e) {
    console.error(e)
  }

  return null
}
