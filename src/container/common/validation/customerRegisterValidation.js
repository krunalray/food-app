
export default function validateform(values) {
  let errors = {}
  if (!values.name) {
    errors.name = 'Required Name';
  }
  if (!values.username) {
    errors.username = 'Required User Name';
  }
  if (!values.email) {
    errors.email = 'Required Email'
  }
  if (!values.password) {
    errors.password = 'Required Password'
  } else if (values.password.length < 6) {
    errors.password = 'Password must more than 6 characters'
  }
  if (values.password !== values.confirm_password) {
    errors.confirm_password = 'Confirm must match to Password'
  }
  return errors
}
