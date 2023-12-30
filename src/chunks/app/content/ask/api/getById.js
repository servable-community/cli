
import * as dotenv from 'dotenv'
import axios from "axios"
dotenv.config()


export default async ({ id }) => {


  //const baseUrl = "https://api.registry.servablecommunity.com"
  const baseUrl = "http://localhost:1387"
  const url = `${baseUrl}/adapter/byuniqueref`

  try {
    const result = await axios({
      method: "GET",
      url,
      headers: {
        "content-type": "application/json"
      },
      params: {
        uniqueRef: id,
        // Where: JSON.stringify({ "post": { "$inQuery": { "where": { "image": { "$exists": true } }, "className": "Post" } } })
      }
    })

    return result.data
  } catch (e) {
    console.error(e)
  }

  return null
}
