import jwt from 'jsonwebtoken';

export default (user) => {
    let userData = {};
    for (let key in user) {
        if (user.hasOwnProperty(key) && key !== 'password') {
            userData[key] = user[key];
        }
    }

    return jwt.sign(
        {
            data: userData
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_MAX_AGE,
            algorithm: "HS256"
        }
    );
}