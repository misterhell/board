const router = require('express').Router()
const Column = require('../../models/column')
const Board = require('../../models/board')



router.post('/create', (req, res) => {
    const { body } = req,
        { boardId, column: reqColumn } = body

    Board.findById(boardId).exec()
        .then(board => {
            Column.create({ ...reqColumn, board: board })
                .then(c => {
                    board.columns.push(c)
                    board.save()
                        .then(() => {
                            res.json(c)
                        })
                })
        })
})

router.get('/', (req, res) => {
    Column.find()
        .populate('board')
        .exec()
        .then(columns => res.json(columns))
})


router.get('/show/:id', (req, res) => {

    res.json(req.params.id)
})



module.exports = router