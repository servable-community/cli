
import get from './lib/get.js'
import save from './lib/get.js'

export default ({
  id: "store",
  description: "Adds netrc capacity",
  register: async ({ toolbox }) => {
    toolbox.store = {
      get,
      save
    }
  }
})
