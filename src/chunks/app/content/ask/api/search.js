
import * as dotenv from 'dotenv'
import axios from "axios"
dotenv.config()


export default async (answers, input = '') => {
  const searchTerm = input
  const page = 0

  const url = `${process.env.PROTOCOL_API_URI}/adapter/search`

  try {
    const result = await axios({
      method: "GET",
      url,
      headers: {
        "content-type": "application/json"
      },
      params: {
        searchTerm,
        page
        // Where: JSON.stringify({ "post": { "$inQuery": { "where": { "image": { "$exists": true } }, "className": "Post" } } })
      }
    })

    if (!result.data || !result.data.length) {
      return []
    }
    return result.data.map(res => ({
      value: res.index.id,
      description: res.index.description,
    }))
  } catch (e) {
    console.error(e)
  }

  return null
}
