import nonEmpty from "./nonEmpty.js"

export default a => {
  switch (a.id) {
    default:
    case 'nonEmpty': {
      return nonEmpty
    }
  }
}
