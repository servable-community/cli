
export default ({
  id: "theme",
  handler: async ({ value,
  }) => {
    return value ? value + 3 : null
  }
})
