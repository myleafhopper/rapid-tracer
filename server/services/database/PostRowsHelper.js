/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const common = require('./Common');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.insertRows = (req, res, connection) => {

    const query = getQuery(req);

    connection.run(query, (error, results) => {

        error ?
            common.sendErrorResponse(res, error, query) :
            res.send(results);
    });
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getQuery = (req) => {

    const partialQuery = `INSERT INTO ${req.body.tableName.toUpperCase()}`;
    const columns = getColumns(req.body.data);
    const values = getValues(req.body.data);
    return `${partialQuery} ${columns} VALUES ${values.join(', ')}`;
};

const getColumns = (data) => {

    const columns = [];

    for (const key in data[0]) {
        columns.push(key.toUpperCase());
    }

    return `( ${columns.join(', ')} )`;
};

const getValues = (data) => {

    const values = [];

    for (const set of data) {

        const row = [];

        for (const key in set) {

            const value = typeof set[key] === 'string' ?
                `'${set[key]}'` : set[key];

            row.push(value);
        }

        values.push(`( ${row.join(', ')} )`);
    }

    return values;
};