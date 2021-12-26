/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const common = require('./Common');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.getRowsByQuery = (req, res, connection) => {

    const query = getQuery(req);

    connection.run(query, (error, results) => {

        error ?
            common.sendErrorResponse(res, error, query) :
            res.send(results);
    });
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getQuery = (req) => {

    const columns = req.body.columns.length > 0 ?
        req.body.columns.join(', ').toUpperCase() : '*';

    return `SELECT ${columns} FROM ${req.body.tableName.toUpperCase()}` +
        common.getWhereClause(req.body.conditions);
};