// external
import { withFormik } from 'formik';
// internal
import { validateForm } from '../../../utils/validationForms';
import { showNotification } from '../../../utils/helpers';
import { userAPI } from '../../../utils/api'
import LoginForm from '../components/LoginForm';
import { setUserData } from '../../../redux/actions';
import store from '../../../redux/store';

const LoginFormContainer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({ email: '', password: '' }),
    // Custom sync validation
    validate: values => {
        const errors = {};

        validateForm({ isAuth: true, errors, values });

        return errors;
    },

    handleSubmit: (values, { resetForm, props}) => {
        const resetValues = {
            password : '',
            email: values.email
        }

        userAPI.signIn(values)
           .then(({ data }) => {
               const { status, token, user } = data;

               if (status === 'error') {
                   showNotification({ title: "Помилка при автоизації", text: 'Логін або пароль невірний', type: status });

                   resetForm({ values: resetValues });
               } else {
                   showNotification({ title: 'Супер!!!', text: 'Авторизація пройшла успішно', type: status });
                   store.dispatch(setUserData({ user, isAuth: true }));
                   resetForm();
                   localStorage.setItem("token", token);
                   props.history.push('/');
               }
           }).catch(error => {
            showNotification({title: "Помилка при авторизації", text: 'Логін або пароль невірний', type: 'error'});
            const resetValues = {
                password : '',
                email: values.email
            }
            resetForm({ values: resetValues });
        });
    },

    displayName: 'LoginForm',
})(LoginForm);

export default  LoginFormContainer;