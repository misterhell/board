const router = require('express').Router()

const Card = require('../../models/card')


router.get('/', (req, res) => {
    Card.find()
        .populate('columns')
        .exec()
        .then(cards => res.json(cards))
})



module.exports = router