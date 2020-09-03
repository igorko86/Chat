import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => console.log(`Server mongodb://localhost:27017/chat`));
// warning
mongoose.set('useFindAndModify', false);