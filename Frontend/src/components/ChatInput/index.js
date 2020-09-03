// external
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { SendOutlined } from '@ant-design/icons/lib/icons';
import { Input, Button, Tooltip } from 'antd';
import { Picker } from 'emoji-mart'
// internal
import UploadFiles from '../UploadFiles';

import './ChatInput.scss';

const ChatInput = ({className}) => {
    const [value, setValue] = useState('');
    const [emojiPicker, setEmojiPicker] = useState(false);

    const addEmoji = (e) => {
        console.log(e)
    }

    return (
        <div className={ className }>
            <div className="chat-input">
                <div className="chat-input__smile-btn">
                    { emojiPicker &&
                        <div className="chat-input__emoji-picker">
                            <Picker set='apple' onSelect={addEmoji} />
                        </div>
                    }
                    <Tooltip title="smile">
                        <Button type="link" icon="smile" onClick={() => setEmojiPicker(!emojiPicker)}/>
                    </Tooltip>
                </div>
                <Input
                    size='large'
                    placeholder="Введіть текст"
                    onChange={ e => setValue(e.target.value) }
                    style={{borderRadius: '10px', maxWidth: '600px'}}
                />
                { value ?
                        <Tooltip title="send">
                            <Button type='link' ><SendOutlined /></Button>
                        </Tooltip>
                        :
                        <div className="chat-input__actions">
                            <Tooltip title="audio">
                                <Button type="link" icon="audio"/>
                            </Tooltip>
                            <UploadFiles />
                        </div>
                }
            </div>

        </div>
    );
}

ChatInput.propTypes = {
    className: PropTypes.string
}
export default ChatInput;