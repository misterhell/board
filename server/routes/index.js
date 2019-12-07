const BoardsRoutes = require('./api/boards')
const ColumnsRoutes = require('./api/columns')
const CardsRoutes = require('./api/cards')


module.exports.apiRoutes = {
    'boards': BoardsRoutes,
    'columns': ColumnsRoutes,
    'cards': CardsRoutes
}