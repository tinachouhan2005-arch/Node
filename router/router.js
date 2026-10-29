let postContainer = require('../controller/controller')

let express = require('express')

let router = express.Router()

router.get('/',postContainer.fetchPost)
router.get('/:id',postContainer.singlePost)
router.post('/',postContainer.createPost)
router.patch('/:id',postContainer.updatePost)
router.delete('/:id',postContainer.deletePost)

module.exports = router