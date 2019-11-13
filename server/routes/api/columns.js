const router = require('express').Router()
const Column = require('../../models/column')
const Board = require('../../models/board')



router.post('/create', async (req, res) => {
    const { body } = req,
        { boardId, column: columnData } = body

    const board = await Board.findById(boardId).exec(),
        col = await Column.create({ ...columnData, board: board })

    if (board && col) {
        board.columns.push(col)
        await board.save()
        res.json(col)
    }

    res.json(null)

})



module.exports = router