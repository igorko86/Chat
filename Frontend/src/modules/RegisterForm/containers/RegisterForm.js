// external
import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';
// internal
import { validateForm } from '../../../utils/validationForms';
import { userAPI } from '../../../utils/api'
import { showNotification } from '../../../utils/helpers';

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({ email: '', fullName: '', password: '', confirm: '' }),
    // Custom sync validation
    validate: values => {
        const errors = {};

        validateForm({ errors, values });

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        userAPI.signUp(values)
            .then(({ data }) => {
                if (data.status === 'success') {
                    setSubmitting(true);
                } else {
                    showNotification({title: "Помилка при реєстрації", text: 'Користувач з таким електронним адресом вже існує', type: 'error'});
                    setSubmitting(false);
                }
            }).catch(error => {
                showNotification({title: "Помилка при реєстрації", text: 'Будь ласка перевірьте правильність введення даних', type: 'error'});
                setSubmitting(false);
        });
    },

    displayName: 'RegisterForm',
})(RegisterForm);