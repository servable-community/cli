
import * as dotenv from 'dotenv'
import axios from "axios"
dotenv.config()


export default async ({ id }) => {
  const url = `${process.env.PROTOCOL_API_URI}/protocol/byuniqueref`
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
    console.info("Error loading protocol", e.message)
  }

  return null
}
