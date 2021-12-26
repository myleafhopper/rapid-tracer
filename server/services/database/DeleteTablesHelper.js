/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const common = require('./Common');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.deleteTable = (req, res, connection) => {

    const query = `DROP TABLE ${req.params.tableName}`;

    connection.all(query, (error, results) => {

        error ?
            common.sendErrorResponse(res, error, query) :
            res.send({
                status: `Table '${req.params.tableName}' has been successfully dropped.`,
                results: results
            });
    });
};