import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUserController } from './controllers/ListUserController';
import { ListTagsConstroller } from './controllers/ListTagsConstroller';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsConstroller();
const listUSerController = new ListUserController();

router.post("/users",
    createUserController.handle
);

router.post("/login",
    authenticateUserController.handle
);

router.post("/tags",
    ensureAuthenticated,
    ensureAdmin,
    createTagController.handle
);

router.post("/compliments",
    ensureAuthenticated,
    createComplimentController.handle
);

router.get("/users/compliments/send",
    ensureAuthenticated,
    listUserSendComplimentsController.handle
);

router.get("/users/compliments/receive",
    ensureAuthenticated,
    listUserReceiveComplimentsController.handle
);

router.get("/tags",
    ensureAuthenticated,
    listTagsController.handle
);

router.get("/users",
    ensureAuthenticated,
    listUSerController.handle
);

export { router }