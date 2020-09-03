// external
import React from 'react';
// internal

const MessageAttachmentFile = ({attachment, className}) => {

    return (
        <div className={ className }>
            { attachment.map((item, index) => {
                return (
                    <div key={ index } className='message__attachment-item'>
                        <img src={ item.img } alt='#'/>
                    </div>
                )
            }) }
        </div>
    );
};

export default MessageAttachmentFile;