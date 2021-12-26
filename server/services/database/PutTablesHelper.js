/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const common = require('./Common');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.renameTable = (req, res, connection) => {

    validateBodySetup(req) ?
        executeSqlStatement(req, res, connection) :
        notValidSetup(req, res);
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const validateBodySetup = (req) => {

    try {

        return req.body.hasOwnProperty('originalTableName') &&
            req.body.hasOwnProperty('newTableName') &&
            req.body.originalTableName.length > 0 &&
            req.body.newTableName.length > 0 &&
            req.body.originalTableName !== req.body.newTableName;

    } catch (error) {
        return false;
    }
};

const executeSqlStatement = (req, res, connection) => {

    const sqlStatement = getSqlStatement(req);
    req.body.sqlStatement = sqlStatement;

    connection.run(req.body.sqlStatement, (error) => {

        error ?
            common.sendErrorResponse(res, error, req.body.sqlStatement) :
            res.send(req.body);
    });
};

const getSqlStatement = (req) => {

    return `ALTER TABLE ${req.body.originalTableName} ` +
        `RENAME TO ${req.body.newTableName}`;
};

const notValidSetup = (req, res) => {

    res.send({
        error: 'Invalid rename table request.',
        originalBody: req.body,
        expectedSampleBody: {
            originalTableName: "DEMO",
            newTableName: "BOOKS"
        }
    });
};