import isnumber from "./isnumber.js"

export default async a => {
  switch (a.id.toLowerCase()) {
    default: {
      return null
    }
    case 'isnumber': {
      return isnumber
    }
  }
}
