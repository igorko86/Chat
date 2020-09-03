export const validateForm = ({ isAuth, errors, values }) => {
    const rules = {
        fullName: (values) => {

            if (!values.fullName || !/(?=.*[a-zA-Z0-9]{3,}$)/i.test(values.fullName)) {
                errors.fullName = 'Введіть логін, щонайменш 3 символи';
            }
        },
        email: (values) => {
            if (!values.email) {
                errors.email = 'Введіть емейл';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
                errors.email = 'Некоректний е-мейл';
            }
        },
        password: (values) => {
            if (!values.password) {
                errors.password = 'Введіть пароль';
            } else if (!isAuth && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(values.password)) {
                errors.password = 'Пароль повинен містити щонайменш 8 символів, 1-велику літеру, 1-цифру';
            }
        },
        confirm: (values) => {
            if (!values.confirm) {
                errors.confirm = 'Підтвердіть пароль';
            } else if (values.password !== values.confirm) {
                errors.confirm = 'Пароль не співпадає';
            }
        }
    }

    Object.keys(values).forEach((key) => {
        rules[key] && rules[key](values);
    });
};

export const validateField = (key, errors, touched) => {
    let value = '';

    if (touched[key]) {
        if (errors[key]) {
            value = 'error';
        } else {
            value = 'success';
        }
    }

    return value;
};