import React from 'react'
import Select from 'react-select'
import Label from './label'

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
}

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
)

const SelectInput = ({
  className,
  form,
  field,
  hint,
  placeholder,
  defaultValue,
  label,
  isMulti,
  isSearchable,
  type,
  onChange,
  options,
  customStyles
}) => {

  return (
    <div className={`form-group ${className}`}>
      <Label label={label} hint={hint} />
      <div>
        <Select
          {...field}
          type={type}
          defaultValue={defaultValue}
          formatGroupLabel={formatGroupLabel}
          onChange={onChange}
          placeholder={placeholder}
          options={options}
          isMulti={isMulti}
          isSearchable={isSearchable}
          isClearable
          className="react-select-container"
          classNamePrefix="react-select"
          styles={customStyles}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary: '#dbecdb',
              primary25: '#EBECF0',
              primary50: '#dbecdb',
              neutral10: '#4c864c',
              neutral80: '#fff'
            }
          })}
        />
      </div>
    </div>
  )
}

export default SelectInput
