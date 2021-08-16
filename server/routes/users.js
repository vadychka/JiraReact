const {Router}=  require('express')
const router =Router()
const {getUser, postUser} = require('../controllers/users')


router.get('/:name/:password', getUser)

router.post('/', postUser)

module.exports = router