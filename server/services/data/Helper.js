/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.getRows = (body) => {

    const predefinedData = getPredefinedData();
    loadColumnNames(body.columns);
    const columns = body.columns;
    const rows = [];

    for (let i = 0; i < body.count; i++) {
        rows.push(getRow(columns, predefinedData));
    }

    return rows;
};

/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const configuration = require('./configuration.json');
const columnNames = [];

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getPredefinedData = () => {

    const directoryManager = new (require('../../core/system/DirectoryManager'));
    const fileManager = new (require('../../core/system/FileManager'));
    const files = directoryManager.getFiles('server/predefined_data');
    const predefinedData = {};

    for (const file of files) {
        const filePath = `server/predefined_data/${file}`;
        predefinedData[file] = fileManager.readJsonFile(filePath);
    }

    return predefinedData;
};

const loadColumnNames = (columns) => {

    columnNames.length = 0;

    for (const column of columns) {
        columnNames.push(column.columnName);
    }
};

const getRow = (columns, predefinedDataCollection) => {

    const row = {};

    for (const column of columns) {

        if (column.dataType === 'predefined') {

            const dataConfiguration = configuration[column.columnName];
            const predefinedData = predefinedDataCollection[dataConfiguration.file];
            const index = getRandomNumber(0, predefinedData.count);
            
            row[column.columnName] = dataConfiguration.key === null ?
                predefinedData.list[index] :
                predefinedData.list[index][dataConfiguration.key];

        } else {

            row[column.columnName] = getCustomDataValue(column);
        }
    }

    return row;
};

const getCustomDataValue = (column) => {

    if (column.columnName === 'Number') {

        return getRandomNumber(
            column.settings.minimum,
            column.settings.maximum
        );

    } else if (column.columnName === 'Characters') {

        return getRandomString(column.settings);
    }
};

const getRandomNumber = (minimum, maximum) => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const getRandomString = (settings) => {

    let characters = '';

    if (settings.includeUpperCaseCharacters) {
        characters = characters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (settings.includeLowerCaseCharacters) {
        characters = characters + 'abcdefghijklmnopqrstuvwxyz';
    }

    if (settings.includeNumber) {
        characters = characters + '0123456789';
    }

    const collection = [];
    const maximum = characters.length;
    const minimum = 0;

    for (let i = 0; i < settings.size; i++) {
        collection.push(
            characters.charAt(
                Math.floor(Math.random() * (maximum - minimum)) + minimum
            )
        );
    }

    return collection.join('');
};