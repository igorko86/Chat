// external
import React from 'react';
import classNames from 'classnames';
// internal
import Time from '../Time';
import AvatarUser from '../AvatarUser';
import IconTick from '../IconTick';
import MessageAudio from '../MessageAudio';
import MessageAttachmentFile from '../MessageAttachmentFile';

import './Message.scss';

const Message = ({ messages }) => {
    const { name, avatar, isMe, _id  } = messages.user;
    const { text, isRead, attachment, isTyping, audioSrc, created_at } = messages;

    return (
        <div className={ classNames('message', {
            'message__isme': isMe,
            'message__is-typing': isTyping,
            'message__is-audio': audioSrc
        }) }>
            <AvatarUser avatar={ avatar } className={ 'message__avatar' } altText={ 'AvatarUser' }/>
            <div className="message__content">
                <span className='message__name'>{ name }</span>
                <div className="message__bubble">
                    { isTyping && (<div className="message__typing">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>) }
                    { text && <p className="message__text">{ text }</p> }
                    { attachment && <MessageAttachmentFile attachment={attachment} className='message__attachment' /> }
                    { audioSrc && <MessageAudio audioSrc={audioSrc}  className='message__audio'/>}
                </div>
                { created_at && <Time className={ 'message__date' } date={ created_at }/> }
            </div>
            { isMe && <IconTick className={ 'message__checked' } isRead={ isRead }/> }
        </div>
    );

}

export default Message;