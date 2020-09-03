// external
import React from 'react';
import { Empty } from 'antd';
// internal
import DialogItem from '../DialogItem';

const Dialogs = ({ items }) => {

    return (
        <div className="dialogs">
            {items.length ? items.map((item, index) => {
                return (
                    <DialogItem key={item._id} { ...item }/>
                );
            }) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Нічого не знайдено'/>}
        </div>
    );
};

export default Dialogs;