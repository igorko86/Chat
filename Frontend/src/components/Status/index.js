// external
import React from 'react';
import Time from '../Time';
// internal

const Status = ({isOnline, date, className}) => {

    return (
        <div className={ className }>
            { isOnline ? <div className="status">у мережі</div>
                : <Time className={ 'status' } isOnline={ isOnline } date={ date }/> }
        </div>
    );
};

export default Status;