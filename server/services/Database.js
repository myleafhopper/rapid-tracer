/* --------------------------------------------------
DATABASE SERVICE
-------------------------------------------------- */

const database = openDatabaseConnection();
const express = require('express');
const router = express.Router();
module.exports = router;

/* --------------------------------------------------
ENDPOINT ROUTES
-------------------------------------------------- */

router.get("/v1/tables", (req, res) => {
    getAllTablesHandler(res);
});

router.get("/v1/tables/:tableName", (req, res) => {
    getSpecificTableHandler(req, res);
});

router.post("/v1/tables", (req, res) => {
    createSpecificTableHandler(req, res);
});

router.delete("/v1/tables/:tableName", (req, res) => {
    deleteSpecificTableHandler(req, res);
});

/* --------------------------------------------------
DATABASE FUNCTIONS
-------------------------------------------------- */

function openDatabaseConnection() {

    const directoryManager = new (require('../core/system/DirectoryManager'))();
    directoryManager.createDirectory('server/resources');

    const relativeDatabasePath = 'server/resources/Database.db';
    const databasePath = directoryManager.path.join(
        directoryManager.root,
        relativeDatabasePath
    );

    const sqlite = require('sqlite3');
    return new sqlite.Database(databasePath);
}

/* --------------------------------------------------
GET HELPER FUNCTIONS
-------------------------------------------------- */

function getAllTablesHandler(res) {

    const query = "SELECT * FROM SQLITE_MASTER " +
        "WHERE TYPE = 'table' " +
        "AND NAME != 'sqlite_sequence'";

    database.all(query, (error, results) => {

        error ?
            sendErrorResponse(res, error, query) :
            parseTableSchema(res, results);
    });
}

function getSpecificTableHandler(req, res) {

    const query = "SELECT * FROM SQLITE_MASTER " +
        "WHERE TYPE='table' " +
        `AND NAME='${req.params.tableName.toUpperCase()}'`;

    database.all(query, (error, results) => {

        error ?
            sendErrorResponse(res, error, query) :
            parseTableSchema(res, results);
    });
}

function sendErrorResponse(res, error, query) {

    error.query = query;
    res.send(error);
}

function parseTableSchema(res, results) {

    const data = getBasicTableInformation(results);
    mapColumnsForTables(data, results);
    res.send(data);
}

function getBasicTableInformation(results) {

    const data = [];

    for (const table of results) {
        data.push({
            tableName: table.tbl_name,
            columns: []
        });
    }

    return data;
}

function mapColumnsForTables(data, results) {

    for (let i = 0; i < data.length; i++) {
        const columns = getColumnsList(results[i]);
        mapColumnsForTable(data[i], columns);
    }
}

function getColumnsList(table) {

    const modifiedQuery = table.sql
        .replace(/, /g, ',')
        .toUpperCase();

    return modifiedQuery.slice(
        modifiedQuery.indexOf('(') + 1,
        modifiedQuery.lastIndexOf(')')
    ).split(',');
}

function mapColumnsForTable(table, columns) {

    for (const column of columns) {

        const values = column.split(' ');

        table.columns.push({
            name: values[0],
            type: values[1],
            notNull: column.includes('NOT NULL'),
            primaryKey: column.includes('PRIMARY KEY'),
            autoIncrement: column.includes('AUTOINCREMENT'),
            unique: column.includes('UNIQUE')
        });
    }
}

/* --------------------------------------------------
POST HELPER FUNCTIONS
-------------------------------------------------- */

function createSpecificTableHandler(req, res) {

    validateManageTableRequestBody(req) ?
        createTable(req, res) :
        notValidTable(req, res);
}

function validateManageTableRequestBody(req) {

    try {

        let validBody = req.body.hasOwnProperty('tableName') &&
            req.body.hasOwnProperty('columns');

        for (const column of req.body.columns) {

            if (!validBody) {
                break;
            }

            validBody = isColumnSetupValid(column);
        }

        return validBody;

    } catch (error) {
        return false;
    }
}

function isColumnSetupValid(column) {

    return column.hasOwnProperty('name') &&
        column.hasOwnProperty('type') &&
        column.hasOwnProperty('notNull') &&
        column.hasOwnProperty('primaryKey') &&
        column.hasOwnProperty('autoIncrement') &&
        column.hasOwnProperty('unique');
}

function createTable(req, res) {

    setCreateTableQuery(req);

    database.run(req.body.query, (error) => {

        error ?
            sendErrorResponse(res, error, req.body.query) :
            res.send(req.body);
    });
}

function setCreateTableQuery(req) {

    const columns = [];

    for (const column of req.body.columns) {
        columns.push(getCreateTableColumnSetup(req, column));
    }

    req.body.query = 'CREATE TABLE ' +
        req.body.tableName.toUpperCase() +
        ` (${columns.join(',')})`;
}

function getCreateTableColumnSetup(req, column) {

    const columnSetup = [
        column.name,
        column.type
    ];

    if (column.notNull) {
        columnSetup.push('NOT NULL');
    }

    if (column.primaryKey) {
        columnSetup.push('PRIMARY KEY');
    }

    if (column.autoIncrement) {
        columnSetup.push('AUTOINCREMENT');
    }

    if (column.unique) {
        columnSetup.push('UNIQUE');
    }

    return columnSetup.join(' ');
}

function notValidTable(req, res) {

    res.send({
        error: 'Invalid create table request body.',
        body: req.body
    });
}

function deleteSpecificTableHandler(req, res) {

    const query = `DROP TABLE ${req.params.tableName}`;

    database.all(query, (error, results) => {

        error ?
            sendErrorResponse(res, error, query) :
            res.send({
                status: `Table '${req.params.tableName}' has been successfully dropped.`
            });
    });
}