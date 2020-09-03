import { notification } from 'antd';

export const convertTime = (number) => {
    let minutes = Math.floor(number / 60).toString().padStart(2, '0'),
        seconds = (number % 60).toFixed().toString().padStart(2, '0');

    return `${minutes} : ${seconds}`;
}

export const showNotification = ({ text, title, type = 'info', duration=4 }) => {
    notification[type]({
        message: title,
        description: text,
        duration
    });
};

