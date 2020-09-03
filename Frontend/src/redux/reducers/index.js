import { combineReducers } from 'redux';

import dialogs from './dialogs';
import messages from './message';
import user from './user';

export default combineReducers({
    dialogs,
    messages,
    user
});