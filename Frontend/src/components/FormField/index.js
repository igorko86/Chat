// external
import React from 'react';
import { Form, Input } from 'antd';
// internal
import { validateField } from '../../utils/validationForms';

const FormField = ({ values, name, errors, touched, iconComponent, placeholder, size, handleChange, handleBlur , isPasswordField }) => {
    return (
        <Form.Item
            validateStatus={validateField(name, errors, touched)}
            help={!touched[name] ? '' : errors[name]}
            hasFeedback
        >
            { isPasswordField ?
                <Input.Password
                    id={name}
                    prefix={iconComponent}
                    placeholder={placeholder}
                    size={size}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                /> :
                <Input
                    id={name}
                    prefix={iconComponent}
                    placeholder={placeholder}
                    size={size}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                />
            }
        </Form.Item>
    );
}

export default FormField;