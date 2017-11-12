let express = require('express');
let router = express.Router();
const {Project, projectArray} = require('./projectArray.js');

const findProject = function(name){
	return projectArray.find(function(project){
		if(name == project.name){
			return project;
		}
	});
}

router.get('/:name', function(req, res, next){
	const project = findProject(req.params.name);
	res.render('project', {project: project});
});

module.exports = router;
