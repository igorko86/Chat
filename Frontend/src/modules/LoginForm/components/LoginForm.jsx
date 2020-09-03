// external
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
// internal
import { Button, Block, FormField } from '../../../components';

const LoginForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = props;

    return (
        <div>
            <div className="auth__top">
                <h2>Війти в акаунт</h2>
                <p>Будь ласка, війдіть в акаунт</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    onSubmit={handleSubmit}
                >
                    <FormField
                        name={'email'}
                        touched={touched}
                        errors={errors}
                        iconComponent={<MailOutlined className="site-form-item-icon" />}
                        placeholder={'Ваш е-мейл'}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        size={'large'}
                        isPasswordField={false}
                    />
                    <FormField
                        name={'password'}
                        placeholder={"Пароль"}
                        size={'large'}
                        touched={touched}
                        errors={errors}
                        iconComponent={<LockOutlined className="site-form-item-icon" />}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        isPasswordField={true}
                    />
                    <Form.Item>
                        <Button
                            type="primary"
                            size="large"
                            onClick={handleSubmit}
                        >
                            Війти в акаунт
                        </Button>
                    </Form.Item>
                    <Link className='auth__register_link' to='/signup'>
                        Зареєструватися!
                    </Link>
                </Form>
            </Block>
        </div>
    );
}

export default LoginForm;