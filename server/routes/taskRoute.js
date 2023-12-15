const express = require('express');
const Task = require('../models/taskModel');
const router = express.Router()

// create task - POST 
router.post('/task', async (req, res) => {
    try {
        const { taskname } = req.body;

        const createTask = new Task({ taskname })
        await createTask.save();
        return res.status(200).json({ message: "task created", createTask })
    }
    catch (error) {
        return res.status(400).json({ error: "Error", error })
    }
})

// read task - GET
router.get('/task', async (req, res) => {
    try {
        const getTask = await Task.find({})
        return res.status(200).json({ message: getTask })
    }
    catch (error) {
        return res.status(400).json({ error: "Error", error })
    }
})

// update task - PUT
router.put('/task/:id', async (req, res) => {
    try {
        const updateTask = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        if (!updateTask) {
            return res.status(400).json({ error: 'task not found' })
        }
        return res.status(200).json({ message: "updated", updateTask })
    }
    catch (error) {
        return res.status(400).json({ error: "Error", error })
    }
})

// delete task - DELETE
router.delete('/task/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete({ _id: req.params.id })
        return res.status(200).json({ message: "deleted", deletedTask })
    }
    catch (error) {
        return res.status(400).json({ error: "Error", error })
    }
})


module.exports = router;