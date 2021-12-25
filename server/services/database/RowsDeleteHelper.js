/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const common = require('./Common');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.deleteRows = (req, res, connection) => {

    const query = req.body.truncateTable ?
        getTruncateQuery(req) :
        getDeleteRowsQuery(req);

    connection.run(query, (error, results) => {

        error ?
            common.sendErrorResponse(res, error, query) :
            res.send(results);
    });
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getTruncateQuery = (req) => {
    return `DELETE FROM ${req.body.tableName.toUpperCase()}`;
};

const getDeleteRowsQuery = (req) => {
    return `DELETE ${req.body.tableName.toUpperCase()} ` +
        common.getWhereClause(req.body.conditions);
};