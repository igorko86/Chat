import { verifyJWToken } from '../utils/index';

export default (req, res, next) => {
    if (req.path  === '/user/signin' || req.path  === '/user/signup') {
        return next();
    }

    const token = "token" in req.headers && req.headers.token;

    if (token) {
        verifyJWToken(token)
            .then((user) => {

                req.user = user.data._doc;
                next();
            })
            .catch((err) => {
                res.json({ status: 'error', err: err });
            });
    }
}