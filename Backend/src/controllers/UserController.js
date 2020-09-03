import bcrypt from 'bcrypt';

import { UserModel } from '../models/index';
import { createJWToken } from '../utils/index';
import { validationResult } from 'express-validator';

class UserController {
    constructor(io) {
        this.io = io;
    }

    show = (req, res) => {
        UserModel.findById(req.params.id, (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            res.json(user);
        });
    }

    getMe = (req, res) => {
        UserModel.findById(req.user._id, (err, user) => {
            if (err || !user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            res.json(user);
        })
    }

    create = (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const { email, password, fullName } = req.body;

        const user = new UserModel({ email, password, fullName });

        user.save().then((obj) => {
            res.json({
                status: 'success',
                messages: ''
            });
        }).catch((error) => {
            res.json('Error' + error)
        })
    }

    remove = (req, res) => {
        UserModel.findOneAndRemove({ _id: req.params.id })
            .then(user => {
                if (user) {
                    res.json({
                        message: `User ${user.fullName} deleted`
                    });
                }

            })
            .catch(error => {
                res.json({
                    message: `User not found`
                })
            });
    }

    login = (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        UserModel.findOne({ email: email }, (err, user) => {
            if (err || !user) {
                return res.status(404).json({
                    message: 'User not found'
                });
            }

            if (user && bcrypt.compareSync(password, user.password)) {
                const token = createJWToken(user);
                const { fullName, _id } = user;

                res.json({
                    token: token,
                    status: 'success',
                    user: { fullName, _id }
                });
            } else {
                res.status(403).json({
                    status: 'error',
                    message: 'Password or email is incorrect'
                });
            }
        });
    }
}

export default UserController;