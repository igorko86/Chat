import bodyParser from 'body-parser';
import { checkAuth, updateLastSeen } from '../middlewares';
import { loginValidation, registerValidation } from '../utils/validations';
import { DialogCtr, UserCtr, MessageCtr } from '../controllers';

export default (app, io) => {
    const UserController = new UserCtr(io);
    const DialogController = new DialogCtr(io);
    const MessageController = new MessageCtr(io);

    app.use(bodyParser.json());
    app.use(checkAuth);
    app.use(updateLastSeen);

    app.get("/user/me", UserController.getMe);
    app.get("/user/:id", UserController.show);
    app.post("/user/signup", registerValidation, UserController.create);
    app.post("/user/signin", loginValidation, UserController.login);
    app.delete("/user/:id", UserController.remove);

    app.get("/dialogs", DialogController.index);
    app.post("/dialogs", DialogController.create);
    app.delete("/dialogs/:id", DialogController.remove);

    app.get("/messages", MessageController.index);
    app.post("/messages", MessageController.create);
    app.delete("/messages/:id", MessageController.remove);
}