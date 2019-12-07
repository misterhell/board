const router = require('express').Router()

const Board = require('../../models/board')
// const Column = require('../../models/column')


router.post('/create', async ({ body: board }, res) => {
    const createdBoard = await Board.create(board)

    if (createdBoard) {
        res.json(createdBoard)
    }
    res.json(null)
})

router.get('/', async (req, res) => {
    try {
        Board.find()
            .populate({
                path: 'columns',
                populate: {
                    path: 'cards'
                }
            })
            .exec().then(r => res.json(r))

        // 
    } catch (e) {
        res.end()

    }
})

// router.post('/rearrange-all', async ({ body: { colsAndCards, boardId } }, res) => {
//     const board = await Board.find(boardId)

//     const cols = await Column.findById(Object.keys(colsAndCards))

//     // if (createdBoard) {
//     //     res.json(createdBoard)
//     // }
//     res.json(null)
// })


router.get('/show/:id', (req, res) => {

    res.json(req.params.id)
})


module.exports = router