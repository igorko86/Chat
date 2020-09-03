// external
import React from 'react';
import { formatDistanceToNow, format, isToday } from "date-fns";
import ukLocal from "date-fns/locale/uk";
// internal

const Time = ({ date, className, isDialogs, isOnline }) => {
    /**
     * Gets format date
     *
     */
    const getMessageTime = () => {
        const timestamp = new Date(date).getTime();
        let formatDate = '';

        if (isDialogs || !isOnline) {
            formatDate = format(timestamp, isToday(timestamp) ? 'HH:mm' : 'dd.MM.yyyy');
        } else {
            formatDate = formatDistanceToNow(timestamp, { locale: ukLocal, addSuffix: true });
        }

        return formatDate;
    }

    return (
        <span className={ className }>
            { getMessageTime() }
        </span>
    );
};

export default Time;