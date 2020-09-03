import express from 'express';
import { MessageModel, DialogModel } from '../models/index';

class MessageController {
    constructor(io) {
        this.io = io;
    }

    index = (req, res) => {
        MessageModel.find({ dialog: req.query.dialogId })
            .populate(["dialog", "user"])
            .exec(function(err, messages) {
                if (err) {
                    return res.status(404).json({
                        message: "Messages not found"
                    });
                }
                res.json(messages);
            });
    }

    create = (req, res) => {
        const { text, dialogId: dialog } = req.body;
        const { _id } = req.user;

        const message = new MessageModel({ text, dialog, user: _id });

        message
            .save()
            .then((obj) => {
                obj.populate('dialog', (err, message) => {
                    if (err) {
                        return res.status(500).json({
                            status: 'error',
                            message: err
                        });
                    }

                    DialogModel.findOneAndUpdate(
                        { _id: dialog },
                        { lastMessage: message._id},
                        { upsert: true }, err => {
                        if (err) {
                            return res.status(500).json({
                                status: 'error',
                                message: err
                            });
                        }
                    });

                    res.json(message);
                })

            }).catch((error) => {
                res.json('Error' + error)
            });
    }

    remove = (req, res) => {
        MessageModel.findOneAndRemove({ _id: req.params.id })
            .then(dialog => {
                if (dialog) {
                    res.json({
                        message: `Message deleted`
                    });
                }
            })
            .catch(error => {
                res.json({
                    message: `Message not found`
                })
            });
    }
}

export default MessageController;