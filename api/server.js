const express = require('express');
const helmet = require('helmet');
const apiRouter = require('./apiRouter');
const projectRouter = require('../projects/projectRouter');
const taskRouter = require('../tasks/taskRouter');
const resourceRouter = require('../resources/resourceRouter');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/', apiRouter);
server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);


module.exports = server;