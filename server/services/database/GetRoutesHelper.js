/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.getRoutes = (res) => {

    res.send({
        routes: [
            {
                route: 'database/v1/tables',
                method: 'GET'
            },
            {
                route: 'database/v1/tables/:tableName',
                method: 'GET'
            },
            {
                route: 'database/v1/tables',
                method: 'POST',
                sampleBody: {
                    tableName: "BOOKS",
                    columns: [{
                        columnName: "ID",
                        dataType: "TEXT",
                        primaryKey: true,
                        notNull: true,
                        autoIncrement: true,
                        unique: false,
                    }]
                }
            },
            {
                route: 'database/v1/tables',
                method: 'PUT',
                sampleBody: {
                    originalTableName: "BOOKS",
                    newTableName: "DEMO"
                }
            },
            {
                route: 'database/v1/tables/:tableName',
                method: 'DELETE'
            },
            {
                route: 'database/v1/columns',
                method: 'POST',
                sampleBody: {
                    tableName: "DEMO",
                    columns: [{
                        columnName: "COMPLETE_NAME",
                        dataType: "TEXT",
                        primaryKey: false,
                        notNull: true,
                        autoIncrement: false,
                        unique: false
                    }]
                }
            },
            {
                route: 'database/v1/columns',
                method: 'PUT',
                sampleBody: {
                    originalColumnName: "COMPLETE_NAME",
                    newColumnName: "FULL_NAME"
                }
            },
            {
                route: 'database/v1/columns',
                method: 'DELETE',
                sampleBody: {
                    tableName: "DEMO",
                    columns: [
                        "FULL_NAME"
                    ]
                }
            },
            {
                route: 'database/v1/rows',
                method: 'GET',
                sampleQs: {
                    tableName: "DEMO",
                    rowCount: 10
                }
            },
            {
                route: 'database/v1/rows',
                method: 'POST',
                sampleBody: {
                    tableName: "DEMO",
                    data: [{
                        "FULL_NAME": "Yoshi Egg"
                    }]
                }
            },
            {
                route: 'database/v1/rows',
                method: 'PUT',
                sampleBody: [{
                    tableName: "DEMO",
                    data: {
                        "FULL_NAME": "Yoshi Green"
                    },
                    conditions: [{
                        columnName: "FULL_NAME",
                        dataValue: "Yoshi Egg",
                        comparisonOperator: "EQUAL"
                    }]
                }]
            },
            {
                route: 'database/v1/rows',
                method: 'DELETE',
                sampleBody: {
                    tableName: "DEMO",
                    truncateTable: false,
                    conditions: [{
                        columnName: "FULL_NAME",
                        dataValue: "Yoshi Green",
                        comparisonOperator: "EQUAL"
                    }]
                }
            },
            {
                route: 'database/v1/query',
                method: 'POST',
                sampleBody: {
                    tableName: "DEMO",
                    columns: [
                        "FULL_NAME"
                    ],
                    conditions: [{
                        columnName: "FULL_NAME",
                        dataValue: "Yoshi Green",
                        comparisonOperator: "EQUAL"
                    }]
                }
            }
        ],
        sampleComplexConditions: getConditions()
    });
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getConditions = () => {
    return [
        {
            conditions: [
                {
                    columnName: "First_Name",
                    dataValue: "Yoshi",
                    comparisonOperator: "EQUAL",
                    conditions: []
                },
                {
                    concatenator: "AND"
                },
                {
                    columnName: "Last_Name",
                    dataValue: "Green",
                    comparisonOperator: "NOT_EQUAL",
                    conditions: []
                },
                {
                    concatenator: "OR"
                },
                {
                    conditions: [
                        {
                            columnName: "Age",
                            dataValue: 20,
                            comparisonOperator: "GREATER_THAN",
                            conditions: []
                        },
                        {
                            concatenator: "AND"
                        },
                        {
                            columnName: "Age",
                            dataValue: 50,
                            comparisonOperator: "LESS_THAN",
                            conditions: []
                        }
                    ]
                }
            ]
        },
        {
            concatenator: "OR"
        },
        {
            conditions: [
                {
                    columnName: "Full_Name",
                    dataValue: "Yoshi Green",
                    comparisonOperator: "NOT_EQUAL",
                    conditions: []
                }
            ]
        }
    ]
};