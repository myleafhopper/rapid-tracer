/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const common = require('./Common');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.getRows = (req, res, connection) => {

    const query = `SELECT * FROM ${req.query.tableName.toUpperCase()} ` +
        `LIMIT ${req.query.count}`;

    connection.all(query, (error, results) => {

        error ?
            common.sendErrorResponse(res, error, query) :
            res.send(results);
    });
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */