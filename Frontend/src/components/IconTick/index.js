// external
import React from 'react';
// internal
import checkedIcon from '../../asserts/img/readed.svg';
import noCheckedIcon from '../../asserts/img/noreaded.svg';

const IconTick = ({ isRead, className }) => {
    return (
        <div className={ className }>
            <img src={ isRead ? checkedIcon : noCheckedIcon } alt='Icon tick'/>
        </div>
    );
};

export default IconTick;