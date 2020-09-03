// external
import React, { useState } from 'react';
import { TeamOutlined } from '@ant-design/icons/lib/icons';
import { Input, Button, Tooltip } from 'antd';
// internal
import { Status, ChatInput } from '../../components';
import { Dialogs, Messages } from '../../containers';

import './Home.scss';

const Home = () => {
    const [inputValue, setValue] = useState('');

    return (
        <section className='home'>
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <TeamOutlined />
                            <span>Список діалогів</span>
                        </div>
                        <Tooltip title="form">
                            <Button type="link" icon="form"/>
                        </Tooltip>
                    </div>

                    <div className="chat__sidebar-search">
                        <Input.Search
                            placeholder="Пошук серед контактів"
                            onChange={e => setValue(e.target.value)}
                            value={ inputValue }
                        />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs inputValue={inputValue}/>
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div/>
                        <div className="chat__dialog-center">
                            <div className="chat__dialog-userName">
                                Sergiy Snow
                            </div>
                            <Status className={'chat__dialog-status'} isOnline={false} date={ 'Sat May 10 2020 19:45:32 GMT+0300 (Eastern European Summer Time)' } />
                        </div>
                        <Tooltip title="ellipsis">
                            <Button type="link" icon="ellipsis"/>
                        </Tooltip>
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages />
                    </div>
                    <ChatInput className={'chat__dialog-input'} />
                </div>
            </div>
        </section>
    );
}

export default Home;
