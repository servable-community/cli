import nonEmpty from "./nonEmpty.js"

export default a => {
  switch (a.type) {
    default:
    case 'nonEmpty': {
      return nonEmpty
    }
  }
}
