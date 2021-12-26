/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const common = require('./Common');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.deleteRows = (req, res, connection) => {

    const sqlStatement = req.body.truncateTable ?
        `DELETE FROM ${req.body.tableName.toUpperCase()}` :
        `DELETE FROM ${req.body.tableName.toUpperCase()}` +
        common.getWhereClause(req.body.conditions);

    connection.run(sqlStatement, (error, results) => {

        error ?
            common.sendErrorResponse(res, error, sqlStatement) :
            res.send(results);
    });
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */