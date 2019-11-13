const router = require('express').Router()

const Board = require('../../models/board')

// const { COLUMN } = require('../../models/model-names')


router.post('/create', async ({ body: board }, res) => {
    const createdBoard = await Board.create(board)

    if (createdBoard) {
        res.json(createdBoard)
    }
    res.json(null)
})

router.get('/', async (req, res) => {
    const boards = await Board.find()
        .populate({
            path: 'columns',
            populate: {
                path: 'cards'
            }
        })
        .exec()

    res.json(boards)
})


router.get('/show/:id', (req, res) => {

    res.json(req.params.id)
})


module.exports = router