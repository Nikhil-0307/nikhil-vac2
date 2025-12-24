const express = require('express');
const connectDB = require('./config/db');
const todo = require('./models/todo');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
connectDB();
app.use(express.json());
app.get("/", async (req, res) => {
    try {
        const data = await todo.find();
        res.status(201).json(data);
    }
    catch (error) {
        res.send(error)
    }
})
app.post("/create", (req, res) => {
    try {
        const updatetask = new todo(req.body);
        updatetask.save();
        res.status(201).json(updatetask);
    } catch (error) {
        res.send(error)
    }
})
app.put("/update/:id", async (req, res) => {
    try {
        const updateTask = await todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(updateTask);
    } catch (error) {
        res.send(error)
    }
})
app.delete("/delete/:id", async (req, res) => {
    try {
        await todo.findByIdAndDelete(req.params.id);
        res.status(201).json("Task Deleted completed"
        );
    } catch (error) {
        res.send(error)
    }
})
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})