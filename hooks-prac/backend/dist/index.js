"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/todos", (req, res) => {
    const todos = [
        {
            id: 1,
            title: 'Sample Todo',
            description: 'This is a sample todo',
        },
        {
            id: 2,
            title: 'Play Game',
            description: 'Lets play game at evening',
        },
        {
            id: 3,
            title: 'Dog',
            description: 'Name of my dog is rocky',
        },
        {
            id: 4,
            title: "Learn JavaScript",
            description: "Understand basic concepts"
        },
        {
            id: 5,
            title: "Do Homework",
            description: "Finish math exercises"
        },
        {
            id: 6,
            title: "Exercise",
            description: "Run for 30 minutes"
        },
        {
            id: 7,
            title: "Read Book",
            description: "Read 20 pages"
        }
    ];
    const shuffled = todos.sort(() => 0.5 - Math.random());
    const randomTodos = shuffled.slice(0, 2);
    res.json({ todos: randomTodos });
});
app.listen(4000);
