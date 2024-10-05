
export default function validate(values) {
  let errors = {}
  if (!values.password) {
    errors.password = 'Required Password'
  }
  if (!values.username) {
    errors.username = 'Required User Name'
  }
  return errors
}
