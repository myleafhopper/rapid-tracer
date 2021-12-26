/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const common = require('./Common');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.getTables = (res, connection) => {

    const query = "SELECT * FROM SQLITE_MASTER " +
        "WHERE TYPE = 'table' " +
        "AND NAME != 'sqlite_sequence'";

    connection.all(query, (error, results) => {

        error ?
            common.sendErrorResponse(res, error, query) :
            parseTableSchema(res, results);
    });
};

module.exports.getTable = (req, res, connection) => {

    const query = "SELECT * FROM SQLITE_MASTER " +
        "WHERE TYPE='table' " +
        `AND NAME='${req.params.tableName.toUpperCase()}'`;

    connection.all(query, (error, results) => {

        error ?
            common.sendErrorResponse(res, error, query) :
            res.send(getSingleTableSetup(results));
    });
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const parseTableSchema = (res, results) => {

    const data = getBasicTableInformation(results);
    mapColumnsForTables(data, results);
    res.send(data);
};

const getBasicTableInformation = (results) => {

    const data = [];

    for (const table of results) {
        data.push({
            tableName: table.tbl_name,
            columns: []
        });
    }

    return data;
};

const mapColumnsForTables = (data, results) => {

    for (let i = 0; i < data.length; i++) {
        const columns = getColumnsList(results[i]);
        mapColumnsForTable(data[i], columns);
    }
};

const getColumnsList = (table) => {

    const modifiedQuery = table.sql
        .replace(/, /g, ',')
        .toUpperCase();

    return modifiedQuery.slice(
        modifiedQuery.indexOf('(') + 1,
        modifiedQuery.lastIndexOf(')')
    ).split(',');
};

const mapColumnsForTable = (table, columns) => {

    for (const column of columns) {

        const values = column.split(' ');

        table.columns.push({
            columnName: values[0],
            dataType: values[1],
            notNull: column.includes('NOT NULL'),
            primaryKey: column.includes('PRIMARY KEY'),
            autoIncrement: column.includes('AUTOINCREMENT'),
            unique: column.includes('UNIQUE')
        });
    }
};

const getSingleTableSetup = (results) => {

    const data = {
        tableName: results[0].tbl_name,
        columns: []
    }; 

    const columns = getColumnsList(results[0]);
    mapColumnsForTable(data, columns);
    return data;
};