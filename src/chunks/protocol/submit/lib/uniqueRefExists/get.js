import * as dotenv from 'dotenv';
import axios from "axios";
dotenv.config()

export default async ({ protocolId, }) => {
    //const baseUrl = "https://api.registry.servable.app"
    const baseUrl = "http://localhost:1387"
    const url = `${baseUrl}/protocolbyuniqueref`

    try {
        const result = await axios({
            method: "GET",
            url,
            headers: {
                "content-type": "application/json",
            },
            params: {
                protocolId,
            }
        })

        return result.data
    } catch (e) {
        console.error(e)
    }

    return null
}