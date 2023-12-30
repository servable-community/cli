
export default async ({ input, params }) => {
  return {
    isValid: input && Number.isInteger(input),
    message: 'Not a number'
  }
}
