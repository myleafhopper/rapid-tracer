/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const columnManager = require('./ColumnManager');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.addColumns = (req, res, connection) => {

    validateBodySetup(req) ?
        alterTable(req, res, connection) :
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

const alterTable = (req, res, connection) => {

    req.body.sqlStatements = getSqlStatements(req);
    executeSqlStatement(req, res, connection);
};

const getSqlStatements = (req) => {

    const sqlStatements = [];

    for (const column of req.body.columns) {
        sqlStatements.push(
            `ALTER TABLE ${req.body.tableName} ` +
            `ADD COLUMN ${columnManager.getColumnSetup(req, column)}`
        );
    }

    return sqlStatements;
};

const executeSqlStatement = (req, res, connection) => {

    connection.serialize(() => {

        for (let i = 0; i < req.body.sqlStatements.length; i++) {

            connection.run(req.body.sqlStatements[i], () => {

                if (i === (req.body.sqlStatements.length - 1)) {
                    res.send(req.body);
                }
            });
        }
    });
};

const notValidSetup = (req, res) => {

    res.send({
        error: 'Invalid alter table request.',
        originalBody: req.body,
        expectedSampleBody: {
            tableName: "DEMO",
            columns: [{
                columnName: "FULL_NAME",
                dataType: "TEXT",
                primaryKey: false,
                notNull: true,
                unique: false,
                autoIncrement: false
            }]
        }
    });
};