import { axios } from '../../core';

export default {
    signIn: (values) => axios.post('/user/signin', values),
    signUp: (values) => axios.post('/user/signup', values)
};