/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const databaseManager = require('./DatabaseManager');
const connection = databaseManager.openDatabaseConnection();

const express = require('express');
const router = express.Router();
module.exports = router;

/* --------------------------------------------------
ROUTES
-------------------------------------------------- */

router.get("/v1/tables", (req, res) => {

    const tablesGetHelper = require('./TablesGetHelper');
    tablesGetHelper.getTables(res, connection);
});

router.get("/v1/tables/:tableName", (req, res) => {

    const tablesGetHelper = require('./TablesGetHelper');
    tablesGetHelper.getTable(req, res, connection);
});

router.post("/v1/tables", (req, res) => {

    const tablesPostHelpler = require('./TablesPostHelper');
    tablesPostHelpler.createTable(req, res, connection);
});

router.put("/v1/tables", (req, res) => {

    const tablesPutHelpler = require('./TablesPutHelper');
    tablesPutHelpler.renameTable(req, res, connection);
});

router.delete("/v1/tables/:tableName", (req, res) => {

    const tablesDeleteHelper = require('./TablesDeleteHelper');
    tablesDeleteHelper.deleteTable(req, res, connection);
});

router.post("/v1/columns", (req, res) => {

    const columnsPostHelper = require('./ColumnsPostHelper');
    columnsPostHelper.addColumns(req, res, connection);
});

router.put("/v1/columns", (req, res) => {

    const columnsPutHelper = require('./ColumnsPutHelper');
    columnsPutHelper.renameColumns(req, res, connection);
});

router.get("/v1/rows", (req, res) => {

    const rowsGetHelper = require('./RowsGetHelper');
    rowsGetHelper.getRows(req, res, connection);
});

router.post("/v1/rows", (req, res) => {

    const rowsPostHelper = require('./RowsPostHelper');
    rowsPostHelper.insertRows(req, res, connection);
});

router.delete("/v1/rows", (req, res) => {

    const rowsDeleteHelper = require('./RowsDeleteHelper');
    rowsDeleteHelper.deleteRows(req, res, connection);
});