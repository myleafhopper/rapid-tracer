/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const common = require('./Common');
const columnManager = require('./ColumnManager');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.createTable = (req, res, connection) => {

    validateBodySetup(req) ?
        createTable(req, res, connection) :
        notValidSetup(req, res);
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const validateBodySetup = (req) => {

    try {

        let validBody = req.body.hasOwnProperty('tableName') &&
            req.body.hasOwnProperty('columns');

        for (const column of req.body.columns) {

            if (!validBody) {
                break;
            }

            validBody = columnManager.isColumnSetupValid(column);
        }

        return validBody;

    } catch (error) {
        return false;
    }
};

const createTable = (req, res, connection) => {

    const sqlStatement = getSqlStatement(req);
    req.body.sqlStatement = sqlStatement;

    connection.run(req.body.sqlStatement, (error) => {

        error ?
            common.sendErrorResponse(res, error, req.body.sqlStatement) :
            res.send(req.body);
    });
};

const getSqlStatement = (req) => {

    const columns = [];

    for (const column of req.body.columns) {
        columns.push(
            columnManager.getColumnSetup(req, column)
        );
    }

    return 'CREATE TABLE ' + req.body.tableName +
        ` (${columns.join(', ')})`;
};

const notValidSetup = (req, res) => {

    res.send({
        error: 'Invalid create table request.',
        originalBody: req.body,
        expectedSampleBody: {
            tableName: "DEMO",
            columns: [
                {
                    columnName: "ID",
                    dataType: "TEXT",
                    primaryKey: true,
                    notNull: true,
                    unique: true,
                    autoIncrement: true
                },
                {
                    columnName: "FIRST_NAME",
                    dataType: "TEXT",
                    primaryKey: false,
                    notNull: true,
                    unique: false,
                    autoIncrement: false
                },
                {
                    columnName: "LAST_NAME",
                    dataType: "TEXT",
                    primaryKey: false,
                    notNull: true,
                    unique: false,
                    autoIncrement: false
                }
            ]
        },
        allowedDataType: columnManager.getAllowedDataTypes()
    });
};