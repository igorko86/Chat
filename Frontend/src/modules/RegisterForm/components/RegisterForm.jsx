// external
import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
// internal
import { Button, Block, FormField } from '../../../components';

const RegisterForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;

    return (
        <div>
            <div className="auth__top">
                <h2>Реєстрація</h2>
                <p>Для входу в чат будь ласка, зареєструйтеся</p>
            </div>
            <Block>
                { isSubmitting  ?
                    <div className='auth__success-block'>
                        <div>
                            <InfoCircleTwoTone style={{fontSize: '50px'}}/>
                        </div>
                        <h3>Підтвердіть свій акаунт</h3>
                        <p>
                            На Вашу електронну адресу відправлено лист для підтвердження акаунту.
                        </p>
                    </div> :
                    <Form
                        name="normal_login"
                        className="login-form"
                        onSubmit={handleSubmit}
                    >
                        <FormField
                            name={'email'}
                            touched={touched}
                            errors={errors}
                            iconComponent={<MailOutlined className="site-form-item-icon"/>}
                            placeholder={'Ваш е-мейл'}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            values={values}
                            size={'large'}
                            isPasswordField={false}

                        />
                        <FormField
                            name={'fullName'}
                            placeholder={"Логін"}
                            size={'large'}
                            touched={touched}
                            errors={errors}
                            iconComponent={<UserOutlined className="site-form-item-icon"/>}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            values={values}
                            isPasswordField={false}
                        />
                        <FormField
                            name={'password'}
                            placeholder={"Пароль"}
                            size={'large'}
                            touched={touched}
                            errors={errors}
                            iconComponent={<LockOutlined className="site-form-item-icon"/>}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            values={values}
                            isPasswordField={true}
                        />
                        <FormField
                            name={'confirm'}
                            placeholder={"Підтвердіть пароль"}
                            size={'large'}
                            touched={touched}
                            errors={errors}
                            iconComponent={<LockOutlined className="site-form-item-icon"/>}
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
                                Зареєструватися
                            </Button>
                        </Form.Item>
                        <Link className='auth__register_link' to='/signin'>
                            Війти в акаунт!
                        </Link>
                    </Form>}
            </Block>
        </div>
    );
}

export default RegisterForm;