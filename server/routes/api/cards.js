const router = require('express').Router()

const Card = require('../../models/card')
const Column = require('../../models/column')



router.post('/create', async (req, res) => {
    const { card: newCard, columnId } = req.body

    const col = await Column.findById(columnId).exec()
        
    if (col) { 
        const card = await Card.create({ ...newCard, column: col })
        col.cards.push(card)
        await col.save()

        res.json(card)
    }

    res.json(null)
})



module.exports = router