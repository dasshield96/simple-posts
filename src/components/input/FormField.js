import React from 'react';
import { Field } from 'rc-field-form';
import PropTypes from 'prop-types';
import { FieldError } from "../field-error";

function FormField({ placeholder, type, ...fieldProps }) {
  return (
    <Field {...fieldProps}>
      {(control, meta) => (
        <>
          <input type={type || 'text'} className="form-control" placeholder={placeholder} {...control} />
          {meta.errors && (
            <FieldError>{meta.errors}</FieldError>
          )}
        </>
      )}
    </Field>
  );
}

FormField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rules: PropTypes.array,
};

export default FormField;
