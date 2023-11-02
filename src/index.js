"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const user_route_1 = require("./routes/user.route");
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const flips_route_1 = require("./routes/flips.route");
const api_route_1 = require("./routes/api.route");
const cors = require('cors');
require('dotenv').config();
mongoose_1.default
    .connect("mongodb+srv://thrillseeker:1115@cluster0.dnl8hkl.mongodb.net/coinflip")
    .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
})
    .catch((err) => {
    console.error('Error connecting to mongo', err.reason);
});
const app = (0, express_1.default)();
app.use(cors());
app.use((0, body_parser_1.json)());
app.use("/apis", api_route_1.apiRouter);
app.use("/users", user_route_1.userRouter);
app.use("/flips", flips_route_1.flipRouter);
app.listen(4444, () => {
    console.log(("server is listening on port 4444"));
});
