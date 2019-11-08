const router = require('express').Router()

const Board = require('../models/board')

router.post('/create', ({ body: board }, res) => {
    Board.create(board)
        .then(b => {
            res.json(b)
        })
})

router.get('/', (req, res) => {
    Board.find()
        .exec()
        .then(boards => res.json(boards))
})


router.get('/show/:id', (req, res) => {
    
    res.json(req.params.id)
})


module.exports = router