"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.apiRouter = router;
router.get('/', (req, res) => {
    return res.send({
        key: "shadow unaware voice ecology chicken firm express hood apple spray write borrow alcohol scatter early"
    });
});
