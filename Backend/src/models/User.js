import mongoose, { Schema } from 'mongoose';
import isEmail from 'validator/lib/isEmail';
import bcrypt from 'bcrypt';
import { differenceInMinutes, parseISO } from 'date-fns';

const UserSchema = new Schema({
    email: {
        type: String,
        required: 'Email address is required',
        validate: [isEmail, 'Invalid email'],
        unique: true
    },
    fullName: {
        type: String,
        required: 'Full name is required'
    },
    password: {
        type: String,
        required: 'password is required'
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    confirmed_hash: String,
    avatar: String,
    lastSeen: {
        type: Date,
        default: new Date()
    },
},{
    timestamps: true
});

UserSchema.virtual('isOnline').get(function() {
    return differenceInMinutes(new Date(), this.lastSeen) < 5;
});

UserSchema.set("toJSON", {
    virtuals: true,
});

UserSchema.pre('save', async function(next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }

    user.password = bcrypt.hashSync(user.password, 10);
    user.confirmed_hash = bcrypt.hashSync(new Date().toString(), 10);
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
