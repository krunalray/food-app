import { useState, useEffect } from "react"

const useForm = (callback,validate,setError,setSuccess) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values, setValues)
    }
  }, [errors])


  const handleSubmit = event => {
    if (setSuccess) {
      setSuccess(null)
    }
    setError(null)
    if (event) event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = event => {
    event.persist()
    if (event.target.classList.contains("multiselect")) {
      const list = document.querySelectorAll(
        `input[name='${event.target.name}']`
      )
      const selection = []
      for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
          selection.push(list[i].value)
        }
      }

      setValues(values => ({
        ...values,
        [event.target.name]: selection.join(","),
      }))
    } else {
      if (event.target.type === "checkbox") {
        event.target.value = event.target.checked
      }

      setValues(values => ({
        ...values,
        [event.target.name]: event.target.value,
      }))
    }
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
