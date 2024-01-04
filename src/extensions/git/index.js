

export default ({
  id: "git",
  description: "Handles git",
  register: async ({ toolbox }) => {
    toolbox.git = {
      init: async ({ destination, }) => {
        const options = {
          cwd: destination
        }
        await toolbox.spawn('git', ['init', '--quiet', '--initial-branch=main'], options)
      }
    }
  }
})
