import React from 'react'
import Label from './label'

const TextInput = (props) => {
  const { className, hint, type, label, placeholder, autocomplete, required, field, form: { errors, touched }} = props
  const status = touched[field.name] && errors[field.name] ? 'is-invalid' : ''

  return (
    <>
      <div className={`form-group ${className}`}>
        <Label label={label} hint={hint} />
        <input
          className={`form-control ${status}`}
          {...field}
          placeholder={placeholder}
          type={type}
          autoComplete={autocomplete}
          required={required}
        />
        {touched[field.name] && errors[field.name] && (
          <div className="invalid-feedback">{errors[field.name]}</div>
        )}
      </div>
    </>
  )
}

export default TextInput
