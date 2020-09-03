// external
import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
// internal
import { Messages as BaseMessages } from '../components';

const Messages = () => {
    const messagesRef = useRef(null);
    const { messagesInfo, isLoading } = useSelector(state => ({ ...state.messages }));

    useEffect(() => {
        messagesRef && messagesRef.current.scrollTo(0, 999999)
    });

    return <BaseMessages messagesRef={messagesRef} messagesInfo={ messagesInfo } isLoading={isLoading} />
};

export default Messages