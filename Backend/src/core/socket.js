import socket from 'socket.io';

export default http => {
    const io = socket(http);

    io.on('connection', socket => {
        console.log('Socket connected');
    });

    return io;
}

