import { DialogModel, MessageModel } from '../models/index';

class DialogController {
    constructor(io) {
        this.io = io;
    }

    index = (req, res) => {
        const {_id} = req.user;

        DialogModel.find()
            .or([{author: _id}, {partner: _id}])
            .populate(['author', 'partner'])
            .populate({
                path: 'lastMessage',
                populate: {
                    path: 'user',
                },
            })
            .exec(function (err, dialogs) {
                if (err) {
                    return res.status(404).json({
                        status: 'error',
                        message: err
                    });
                }

                res.json(dialogs);
            });
    }

    create = (req, res) => {
        const {partnerId, text} = req.body;
        const {_id} = req.user;
        const postData = {author: _id, partner: partnerId}

        DialogModel.findOne(postData, (err, dialog) => {
            if (err) {
                return res.status(500).json({
                    message: err,
                    status: 'Error'
                });
            }

            if (dialog) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Такий діалог вже існує',
                });
            } else {
                const dialog = new DialogModel(postData);

                dialog.save()
                    .then((dialog) => {
                        if (dialog) {
                            const messageData = {
                                text: text,
                                user: _id,
                                dialog: dialog._id
                            }

                            const message = new MessageModel(messageData);

                            message.save()
                                .then((message) => {
                                    dialog.lastMessage = message._id;
                                    dialog.save()
                                        .then(() => {
                                            res.json(dialog);

                                            this.io.emit('SERVER:DIALOG_CREATED', {
                                                ...postData,
                                                dialog
                                            })
                                        });
                                })
                                .catch((error) => {
                                    res.json('Error' + error);
                                });
                        }
                    })
                    .catch((error) => {
                        res.json('Error' + error);
                    });
            }
        });
    }

    remove = (req, res) => {
        DialogModel.findOneAndDelete({author: req.params.id})
            .then(dialog => {
                if (dialog) {
                    res.json({
                        message: `Dialog deleted`
                    });
                } else {
                    res.json({
                        message: `Dialog not found`
                    })
                }
            })
            .catch(error => {
                res.json({
                    message: error
                })
            });
    }
}

export default DialogController;