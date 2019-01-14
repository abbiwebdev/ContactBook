import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Dry = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    error

}) => {
  return (
    <div className="form-group">
        <label htmlFor={label}>{label}</label>
        <input 
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {
            'is-invalid': error
        })} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
     </div>
  )
}

Dry.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

Dry.defaultProps = {
    type: 'text'
}

export default Dry;