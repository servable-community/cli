import ejs from 'ejs'

export default ({ generator }) => {
  return {
    render: (text, data) => {
      return ejs.render(text, data)
    },
  }
}

