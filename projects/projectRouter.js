const express = require('express');
const router = express.Router();
const db = require('./projectModel')

router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => {
            if (projects.length) {
            	res.status(200).json(projects)
            } else {
            	res.status(404).json({message: 'There are no projects to be found.'})
            }
        })
        .catch(error => {
            console.log('get all projects error', error);
            res.status(500).json({message: 'There was an error in the database when trying to get all projects.'})
        })
});
router.post('/', (req, res) => {
	const newProject = req.body
    db.addProject(newProject)
        .then(addedProject => {
            if (addedProject) {
            	res.status(201).json(addedProject)
            } else {
            	res.status(500).json({message: 'Was not able to add that project.'})
            }
        })
        .catch(error => {
            console.log('adding project error', error);
            res.status(500).json({message: 'There was a database error when adding that project.'})
        })
});

module.exports = router;