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

router.get("/v1/routes", (req, res) => {

    const helper = require('./GetRoutesHelper');
    helper.getRoutes(res);
});

router.get("/v1/tables", (req, res) => {

    const helper = require('./GetTablesHelper');
    helper.getTables(res, connection);
});

router.get("/v1/tables/:tableName", (req, res) => {

    const helper = require('./GetTablesHelper');
    helper.getTable(req, res, connection);
});

router.post("/v1/tables", (req, res) => {

    const helper = require('./PostTablesHelper');
    helper.createTable(req, res, connection);
});

router.put("/v1/tables", (req, res) => {

    const helper = require('./PutTablesHelper');
    helper.renameTable(req, res, connection);
});

router.delete("/v1/tables/:tableName", (req, res) => {

    const helper = require('./DeleteTablesHelper');
    helper.deleteTable(req, res, connection);
});

router.post("/v1/columns", (req, res) => {

    const helper = require('./PostColumnsHelper');
    helper.addColumns(req, res, connection);
});

router.put("/v1/columns", (req, res) => {

    const helper = require('./PutColumnsHelper');
    helper.renameColumns(req, res, connection);
});

router.delete("/v1/columns", (req, res) => {

    const helper = require('./DeleteColumnsHelper');
    helper.deleteColumns(req, res, connection);
});

router.get("/v1/rows", (req, res) => {

    const helper = require('./GetRowsHelper');
    helper.getRows(req, res, connection);
});

router.post("/v1/rows", (req, res) => {

    const helper = require('./PostRowsHelper');
    helper.insertRows(req, res, connection);
});

router.put("/v1/rows", (req, res) => {

    const helper = require('./PutRowsHelper');
    helper.updateRows(req, res, connection);
});

router.delete("/v1/rows", (req, res) => {

    const helper = require('./DeleteRowsHelper');
    helper.deleteRows(req, res, connection);
});

router.post("/v1/query", (req, res) => {

    const helper = require('./PostQueryHelper');
    helper.getRowsByQuery(req, res, connection);
});