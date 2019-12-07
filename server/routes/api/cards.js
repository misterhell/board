const router = require('express').Router()

const Card = require('../../models/card')
const Column = require('../../models/column')


router.post('/create', async ({ body }, res) => {
    const { card: newCard, columnId } = body

    try {
        const col = await Column.findById(columnId).populate('cards').exec()

        if (col) {
            const card = await Card.create({ ...newCard, column: col })
            col.cards.push(card)
            await col.save()
            return res.json(card)
        }

    } catch (e) {
        return res.json(e)
    }

    res.json(null)
})



module.exports = router