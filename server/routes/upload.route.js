const { Router } = require('express')
const fileMiddlware = require('../middleware/file')

const router = Router()

router.post('./upload', fileMiddlware.single('avatar'), (req, res) => {
    try {
        if (req.file) {
            res.json(req.file)
        }
    } catch (e) {
        console.log('error')
    }
})

module.exports = router
