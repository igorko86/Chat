// external
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// internal
import { setDialogs } from '../redux/actions';
import { Dialogs as BaseDialogs } from '../components';
import socket from '../core/socket';

const Dialogs = ({ inputValue }) => {
    const { items } = useSelector(state => state.dialogs);
    const dispatch = useDispatch();

    useEffect(() =>{
        localStorage.token && dispatch(setDialogs());
    }, [dispatch]);

    let dialogs = inputValue ? items.filter(dialog => dialog.user.fullName.toLowerCase().includes(inputValue.toLowerCase()))
        : items;

    socket.on('SERVER:DIALOG_CREATED', (data) => {
        console.log(data);
        dispatch(setDialogs());
    })

    return <BaseDialogs items={ dialogs } />
};

export default Dialogs
