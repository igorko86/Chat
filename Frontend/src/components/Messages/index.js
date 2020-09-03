// external
import React, { Fragment, useState } from 'react';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';
// internal
import MessageItem from '../MessageItem';

import './Messages.scss';

const Messages = ({ messagesRef, messagesInfo, isLoading }) => {
    const { messages, currentDialogId } = messagesInfo;

    return (
        <div ref={ messagesRef }
             className={ classNames("messages", {'messages__isLoading': isLoading}) }>
            { currentDialogId === null ? <Empty description='Виберіть діалог'/>
                : isLoading ? <Spin size="large" tip="Завантаження повідомлень..."/>
                : messages.length ?
                    <Fragment>
                        { messages.map((message, index) =><MessageItem key={ message._id + index } messages={ message }/>) }
                    </Fragment>
                : <Empty description='Повідомлення відсутні'/>
            }
        </div>
    );
};

export default Messages;

// <MessageItem
//     avatar={ 0 }
//     name={'Vasya'}
//     text={ ' Hello Ihor! How are you?' }
//     date={ 'Sat Apr 25 2019 19:45:32 GMT+0300 (Eastern European Summer Time)' }
//     isMe={ false }
//     attachment={[
//         { img: 'https://source.unsplash.com/100x100/?nature,water' },
//         { img: 'https://source.unsplash.com/100x100/?nature,water' },
//         { img: 'https://source.unsplash.com/100x100/?nature,water' },
//         // { img: 'https://source.unsplash.com/100x100/?nature,water' }
//     ]}
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Petya'}
//     text={ ' Hello Ihor! How are you?' }
//     date={ 'Sat Apr 25 2019 19:45:32 GMT+0300 (Eastern European Summer Time)' }
//     isMe={ false }
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Andriy'}
//     text={ ' Hello ' }
//     date={ 'Sat Apr 25 2020 19:37:32 GMT+0300 (Eastern European Summer Time)' }
//     isMe={ true }
//     isRead={ true }
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Andriy'}
//     text={ ' Hello ' }
//     date={ 'Sat Apr 25 2020 19:37:32 GMT+0300 (Eastern European Summer Time)' }
//     isMe={ true }
//     isRead={ false }
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Andriy'}
//     text={ '' }
//     date={ 'Sat Apr 25 2020 19:37:32 GMT+0300 (Eastern European Summer Time)' }
//     attachment={[
//         { img: 'https://source.unsplash.com/100x100/?nature,water' }
//     ]}
//     isMe={ true }
//     isRead={ false }
//     isTyping={false}
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Andriy'}
//     text={ '' }
//     isMe={ false }
//     isTyping={true}
// />
//
// <MessageItem
//     avatar={ 0 }
//     name={'Sergiy'}
//     attachment={[
//         { img: 'https://source.unsplash.com/100x100/?nature,water' }
//     ]}
//     audioSrc={'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'}
//     date={ 'Sat Apr 25 2020 19:37:32 GMT+0300 (Eastern European Summer Time)' }
//     isMe={ false }
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Vasya'}
//     text={ ' Hello Ihor! How are you?' }
//     date={ 'Sat Apr 25 2019 19:45:32 GMT+0300 (Eastern European Summer Time)' }
//     isMe={ false }
//     attachment={[
//         { img: 'https://source.unsplash.com/100x100/?nature,water' },
//         { img: 'https://source.unsplash.com/100x100/?nature,water' },
//         { img: 'https://source.unsplash.com/100x100/?nature,water' },
//         // { img: 'https://source.unsplash.com/100x100/?nature,water' }
//     ]}
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Petya'}
//     text={ ' Hello Ihor! How are you?' }
//     date={ 'Sat Apr 25 2019 19:45:32 GMT+0300 (Eastern European Summer Time)' }
//     isMe={ false }
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Andriy'}
//     text={ ' Hello ' }
//     date={ 'Sat Apr 25 2020 19:37:32 GMT+0300 (Eastern European Summer Time)' }
//     isMe={ true }
//     isRead={ true }
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Andriy'}
//     text={ ' Hello ' }
//     date={ 'Sat Apr 25 2020 19:37:32 GMT+0300 (Eastern European Summer Time)' }
//     isMe={ true }
//     isRead={ false }
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Andriy'}
//     text={ '' }
//     date={ 'Sat Apr 25 2020 19:37:32 GMT+0300 (Eastern European Summer Time)' }
//     attachment={[
//         { img: 'https://source.unsplash.com/100x100/?nature,water' }
//     ]}
//     isMe={ true }
//     isRead={ false }
//     isTyping={false}
// />
// <MessageItem
//     avatar={ 0 }
//     name={'Andriy'}
//     text={ '' }
//     isMe={ false }
//     isTyping={true}
// />
//
// <MessageItem
//     avatar={ 0 }
//     name={'Sergiy'}
//     attachment={[
//         { img: 'https://source.unsplash.com/100x100/?nature,water' }
//     ]}
//     audioSrc={'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'}
//     date={ 'Sat Apr 25 2020 19:37:32 GMT+0300 (Eastern European Summer Time)' }
//     isMe={ false }
// />