const {Router}=  require('express')
const { getProjects, postProject } = require('../controllers/projects')
const router =Router()
const Projects = require('../models/projects')


router.get('/', getProjects)

router.post('/', postProject)


module.exports = router