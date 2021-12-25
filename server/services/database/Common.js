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
    return 'WHERE ' + getConditions(conditions, false);
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getConditions = (conditions, includeParenthesis = true) => {

    const list = [];

    for (let i = 0; i < conditions.length; i++) {

        setConcatenator(list, conditions, i);
        list.push(getClause(conditions[i]));
        setSubConditions(list, conditions[i]);
    }

    return includeParenthesis ?
        `( ${list.join('')} )` :
        list.join('');
};

const setConcatenator = (list, conditions, index) => {

    if (index > 0) {
        list.push(` ${conditions[index - 1].concatenator} `);
    }
};

const getClause = (condition) => {

    return condition.columnName + ' ' +
        operators[condition.comparisonOperator] + ' ' +
        condition.dataValue;
};

const setSubConditions = (list, condition) => {

    if (condition.conditions.length === 0) {
        return;
    }

    list.push(` ${condition.concatenator} `);
    const subConditions = getConditions(condition.conditions, true);
    list.push(`${subConditions}`);
};