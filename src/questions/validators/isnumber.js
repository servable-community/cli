
export default async ({ input, params }) => {
  return {
    isValid: (input && Number.isInteger(parseInt(input))),
    message: 'Not a number'
  }
}
