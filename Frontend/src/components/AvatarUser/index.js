// external
import React from 'react';
import { Avatar } from 'antd';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
// internal

const AvatarUser = ({ avatar='', altText, className }) => {
    const styleAvatarDefault = {
        backgroundColor: '#87d068',
        width: '58px',
        height: '58px',
        borderRadius: '50%'
    };

    return (
        <div className={ className }>
            { avatar ? <img src={ avatar } alt={ altText }/> :
                <Avatar size={ 64 } icon={ <UserOutlined  /> } style={styleAvatarDefault } /> }
        </div>
    );
}

export default AvatarUser;