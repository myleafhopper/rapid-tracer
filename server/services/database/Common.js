/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const operators = {
    'EQUAL': '=',
    'NOT_EQUAL': '!=',
    'GREATER_THAN': '>',
    'GREATER_THAN_OR_EQUAL': '>=',
    'LESS_THAN': '<',
    'LESS_THAN_OR_EQUAL': '<=',
};

/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.sendErrorResponse = (res, error, sql = null) => {

    if (sql !== null) {
        error.sql = sql;
    }

    res.send(error);
};

module.exports.getWhereClause = (conditions) => {

    const clauses = getConditions(conditions);
    return clauses.length > 6 ?
        ` WHERE ${clauses}` : '';
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getConditions = (list) => {

    const clauses = [];

    for (const item of list) {
        setClause(clauses, item);
    }

    return `( ${clauses.join(' ')} )`;
};

const setClause = (clauses, item) => {

    if (item.hasOwnProperty('concatenator')) {

        clauses.push(item.concatenator);

    } else if (item.hasOwnProperty('columnName')) {

        const dataValue = typeof item.dataValue === 'string' ?
            `'${item.dataValue}'` : item.dataValue;

        clauses.push(item.columnName.toUpperCase() + ' ' +
            operators[item.comparisonOperator] + ' ' +
            dataValue);

    } else if (item.hasOwnProperty('conditions') &&
        item.conditions.length > 0) {

        clauses.push(getConditions(item.conditions));
    }
}