const express = require('express');
const router = express.Router();
const db = require('./taskModel');

router.get('/', (req, res) => {
    db.getTasks()
        .then(tasks => {
            if (tasks.length) {
            	res.status(200).json(tasks)
            } else {
            	res.status(404).json({message: 'There are no tasks in the database.'})
            }
        })
        .catch(error => {
            console.log('get all tasks error', error);
            res.status(500).json({message: 'There was a database error getting all tasks.'})
        })
});

router.post('/', (req, res) => {
	const newTask = req.body;

	db.addTask(newTask)
        .then(addedTask => {
            if (addedTask) {
            	res.status(201).json(addedTask)
            } else {
            	res.status(500).json({message: 'Could not add that task.'})
            }
        })
        .catch(error => {
            console.log('add a task error', error);
            res.status(500).json({message: 'There was a database error trying to add a new task.'})
        })
});

module.exports = router;