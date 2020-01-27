const express = require('express');
const router = express.Router();
const db = require('./projectModel');

router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => {
            if (projects.length) {
                res.status(200).json(projects);
            } else {
                res.status(404).json({message: 'There are no projects to be found.'});
            }
        })
        .catch(error => {
            console.log('get all projects error', error);
            res.status(500).json({message: 'There was an error in the database when trying to get all projects.'});
        });
});

router.post('/', (req, res) => {
    const newProject = req.body;
    db.addProject(newProject)
        .then(addedProject => {
            if (addedProject) {
                res.status(201).json(addedProject);
            } else {
                res.status(500).json({message: 'Was not able to add that project.'});
            }
        })
        .catch(error => {
            console.log('adding project error', error);
            res.status(500).json({message: 'There was a database error when adding that project.'});
        });
});

router.get('/:id/details', (req, res) => {
    const projectId = req.params.id;
    db.getProjectDetails(projectId)
        .then(projectDetails => {
            if (projectDetails) {
                res.status(200).json(projectDetails);
            } else {
                res.status(404).json({message: 'There are no projectDetails to be found.'});
            }
        })
        .catch(error => {
            console.log('get projectDetails error', error);
            res.status(500).json({message: 'There was an error in the database when trying to get a projectDetails.'});
        });
    
});

router.get('/:id/details/stuff', async (req, res) => {
    const projectId = req.params.id;
    const projectDetails = await db.getstuff(projectId);
    if (projectDetails) {
        res.status(200).json(projectDetails);
    } else {
        res.status(404).json({message: 'There are no projectDetails to be found.'});
    }
});


module.exports = router;