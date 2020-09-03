import { UserModel } from '../models/index';

export default (req, __, next) => {
    if (req.user) {
        UserModel.findOneAndUpdate(
            { _id: req.user._id },
            { lastSeen: new Date() },
            { new: true },
            () => {}
        );
    }

    next();
};