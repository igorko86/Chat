// external
import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
// internal
import Time from '../Time';
import AvatarUser from '../AvatarUser';
import { setMessages } from '../../redux/actions';
import IconTick from '../IconTick';


import './DialogItem.scss';

const DialogItem = ({partner: user, lastMessage, _id}) => {
    const dispatch = useDispatch();
    const {currentDialogId} = useSelector(state => (state.messages.messagesInfo));
    const {fullName, isOnline} = user,
        {text, isRead, createdAt, isMe} = lastMessage;

    return (
        <Link to={`/dialog/${_id}`}>
            <div
                className={classNames('dialogs__item', {
                    'dialogs__item-online': isOnline,
                    'dialogs__item-selected': currentDialogId === _id
                })}
                onClick={() => dispatch(setMessages(_id))}
            >
                <AvatarUser className={'dialogs__item-avatar'} altText={fullName}/>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <span className='dialogs__item-info-fullName'>{fullName}</span>
                        <Time className={'dialogs__item-info-date'} date={createdAt} isDialogs={true}/>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p className="dialogs__item-info-text">{text}</p>
                        {isMe ? <IconTick className={'dialogs__item-info-tick'} isRead={isRead}/>
                            : !isRead ? (<div style={{
                                background: '#f46b6b',
                                color: '#ffffff',
                                fontWeight: 500,
                                width: '19' + 'px',
                                height: '19px',
                                borderRadius: '30px',
                                textAlign: 'center',
                            }}>{'9+'}</div>) : null}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DialogItem;