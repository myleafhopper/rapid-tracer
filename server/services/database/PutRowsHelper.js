/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const common = require('./Common');

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.updateRows = (req, res, connection) => {

    req.body.sqlStatements = getSqlStatements(req);

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

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getSqlStatements = (req) => {

    const queries = [];

    for (const row of req.body) {
        queries.push(getSqlStatement(row));
    }

    return queries;
};

const getSets = (row) => {

    const sets = [];

    for (const column in row.data) {

        const value = typeof row.data[column] === 'string' ?
            `'${row.data[column]}'` : row.data[column];

        sets.push(`${column} = ${value}`);
    }

    return sets.join(', ');
};

const getSqlStatement = (row) => {

    const sets = getSets(row);
    const conditions = common.getWhereClause(row.conditions);
    return `UPDATE ${row.tableName} SET ` + sets + conditions;
};