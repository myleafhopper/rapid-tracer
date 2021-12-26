/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const columnManager = require('./ColumnManager');
const columns = [];

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.deleteColumns = (req, res, connection) => {

    const query = getTableSchemaQuery(req);
    columns.length = 0;

    connection.all(query, (error, results) => {

        const columnList = getColumnList(results[0]);
        mapColumns(req, columnList);
        executeSerializedStatements(req, res, connection);
    });
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getTableSchemaQuery = (req) => {
    return "SELECT * FROM SQLITE_MASTER " +
        "WHERE TYPE='table' " +
        `AND NAME='${req.body.tableName.toUpperCase()}'`;
};

const getColumnList = (table) => {

    const modifiedQuery = table.sql
        .replace(/, /g, ',')
        .toUpperCase();

    return modifiedQuery.slice(
        modifiedQuery.indexOf('(') + 1,
        modifiedQuery.lastIndexOf(')')
    ).split(',');
};

const mapColumns = (req, columnList) => {

    for (const column of columnList) {

        const values = column.split(' ');

        const columnSetup = {
            columnName: values[0],
            dataType: values[1],
            notNull: column.includes('NOT NULL'),
            primaryKey: column.includes('PRIMARY KEY'),
            autoIncrement: column.includes('AUTOINCREMENT'),
            unique: column.includes('UNIQUE')
        };

        if (!req.body.columns.includes(columnSetup.columnName)) {
            columns.push(columnSetup);
        }
    }
};

const executeSerializedStatements = (req, res, connection) => {

    connection.serialize(() => {

        const createTableSqlStatement = getCreateTableSqlStatement('TEMPORARY');
        const insertDataSqlStatement = getInserDataSqlStatement(req);
        const dropTableSqlStatement = `DROP TABLE ${req.body.tableName.toUpperCase()}`;
        const renameTableSqlStatement = `ALTER TABLE TEMPORARY RENAME TO ${req.body.tableName.toUpperCase()}`;
        const getNewTableRowsQuery = `SELECT * FROM ${req.body.tableName.toUpperCase()} LIMIT 10`;

        connection.run(createTableSqlStatement)
            .run(insertDataSqlStatement)
            .run(dropTableSqlStatement)
            .run(renameTableSqlStatement)
            .all(getNewTableRowsQuery, (error, results) => {
                res.send(results);
            });
    });
};

const getCreateTableSqlStatement = (tableName) => {

    const columnSetupList = [];

    for (const column of columns) {
        columnSetupList.push(columnManager.getColumnSetup(column));
    }

    return `CREATE TABLE ${tableName} (${columnSetupList.join(', ')})`;
};

const getInserDataSqlStatement = (req) => {

    const columnNames = getColumnNames();
    return `INSERT INTO TEMPORARY (${columnNames}) ` +
        `SELECT ${columnNames} FROM ${req.body.tableName}`;
};

const getColumnNames = () => {

    const columnNames = [];

    for (const column of columns) {
        columnNames.push(column.columnName);
    }

    return columnNames.join(', ');
};