/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.isColumnSetupValid = (column) => {
    
    return column.hasOwnProperty('columnName') &&
        column.hasOwnProperty('dataType') &&
        column.hasOwnProperty('primaryKey') &&
        column.hasOwnProperty('notNull') &&
        column.hasOwnProperty('unique') &&
        column.hasOwnProperty('autoIncrement');
};

module.exports.getColumnSetup = (column) => {

    const columnSetup = [
        column.columnName,
        column.dataType
    ];

    if (column.notNull) {
        columnSetup.push('NOT NULL');
    }

    if (column.primaryKey) {
        columnSetup.push('PRIMARY KEY');
    }

    if (column.unique) {
        columnSetup.push('type UNIQUE');
    }

    if (column.autoIncrement) {
        columnSetup.push('AUTOINCREMENT');
    }

    return columnSetup.join(' ');
};

module.exports.getAllowedDataTypes = () => {

    return {
        'NULL': 'NULL values mean missing information or unknown.',
        'INTEGER': 'Integer values are whole numbers (either positive or negative). An integer can have variable sizes such as 1, 2,3, 4, or 8 bytes.',
        'REAL': 'Real values are real numbers with decimal values that use 8-byte floats.',
        'TEXT': 'TEXT is used to store character data. The maximum length of TEXT is unlimited. SQLite supports various character encodings.',
        'BLOB': 'BLOB stands for a binary large object that can store any kind of data. The maximum size of BLOB is, theoretically, unlimited.',
    }
};