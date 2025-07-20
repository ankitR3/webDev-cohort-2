import express, {Request, Response} from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/todos", (req: Request, res: Response) => {
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
})

app.listen(4000);
