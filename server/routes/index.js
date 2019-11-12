const BoardsRoutes = require('./api/boards')
const ColumnsRoutes = require('./api/columns')





module.exports.apiRoutes = {
    'boards' : BoardsRoutes,
    'columns': ColumnsRoutes
}