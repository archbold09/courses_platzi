"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./users/routes"));
// export default (app: Express) => {
//   const router = express.Router();
//   app.use('/api/v1', router);
//   router.use('/users', usersRouter);
// };
function routerApi(app) {
    const router = express_1.default.Router();
    app.use('/api/v1', router);
    router.use('/users', routes_1.default);
}
exports.default = routerApi;
