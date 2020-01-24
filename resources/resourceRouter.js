const express = require('express');
const router = express.Router();
const db = require('./resourceModel');

router.get('/', (req, res) => {
    db.getResources()
        .then(resources => {
            if (resources.length) {
            	res.status(200).json(resources)
            } else {
            	res.status(404).json({message: 'There are no resources to be found.'})
            }
        })
        .catch(error => {
            console.log('get all resources error', error);
            res.status(500).json({message: 'There was an error in the database when trying to get all resources.'})
        })
});

router.get('/linked', (req, res) => {
    db.getLinked()
        .then(info => {
            if (info.length) {
            	res.status(200).json(info)
            } else {
            	res.status(404).json({message: 'There are no info to be found.'})
            }
        })
        .catch(error => {
            console.log('get all info error', error);
            res.status(500).json({message: 'There was an error in the database when trying to get all info.'})
        })
});

router.post('/', (req, res) => {
	const newResource = req.body.resource;
	const taskId = req.body.task_id;
	const projectId = req.body.project_id;
    db.addResource(newResource,taskId,projectId)
        .then(addedResource => {
            if (addedResource) {
            	res.status(201).json(addedResource)
            } else {
            	res.status(500).json({message: 'Was not able to add that resource.'})
            }
        })
        .catch(error => {
            console.log('adding resource error', error);
            res.status(500).json({message: 'There was a database error when adding that resource.'})
        })
});

module.exports = router;