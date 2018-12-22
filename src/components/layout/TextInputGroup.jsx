import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';



const TextInputGroup = ({label, name, value, placeholder, type, onChange, error}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={onChange} 
                name={name} 
                placeholder={placeholder}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })} 
            />
            {error && <div className="invalid-feedback">{error}</div>}        
        </div>
    );
};

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;