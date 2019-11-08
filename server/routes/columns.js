const router = require('express').Router()
const Column = require('../models/column')


router.post('/create', ({ body: column }, res) => {
    Column.create(column)
        .then(b => {
            res.json(b)
        })
})

router.get('/', (req, res) => {
    Column.find()
        .exec()
        .then(columns => res.json(columns))
})


router.get('/show/:id', (req, res) => {
    
    res.json(req.params.id)
})



module.exports = router