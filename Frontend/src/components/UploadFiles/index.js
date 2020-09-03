// external
import React, { useRef, useState } from 'react';
import { Button, Tooltip } from 'antd';

import './UploadFiles.scss';

const UploadFiles = (props) => {
    const uploadFile = useRef(null);
    const [files, setFiles] = useState('');

    const handleUploadFiles = (e) => {
        uploadFile.current.click();
    }

    const onChangeHandler = (event) => {
        console.log(event.target.files)
    }
    return (
        <div className='photos' >
            <Tooltip title='завантаження зображень'>
                <Button type="link" icon="camera" onClick={handleUploadFiles}></Button>
            </Tooltip>
            <input type="file" ref={uploadFile} onChange={onChangeHandler}  accept=".png, .jpg, .jpeg" multiple style={{display: 'none'}} />
        </div>


);
}


// internal

export default UploadFiles;