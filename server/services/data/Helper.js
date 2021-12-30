/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.getRows = (body) => {

    getPredefinedData();
    loadColumns(body);
    loadDataNames();
    const rows = [];

    for (let i = 0; i < body.count; i++) {
        rows.push(getRow());
    }

    dataNames.length = 0;
    columns.length = 0;
    return rows;
};

/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const configuration = require('./configuration.json');
const predefinedData = {};
const dataNames = [];
const columns = [];

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getPredefinedData = () => {

    if (Object.keys(predefinedData).length > 0) {
        return;
    }

    const fileManager = new (require('../../core/system/FileManager'));

    for (const key in configuration) {
        if (configuration[key].file !== null) {
            const filePath = `server/predefined_data/${configuration[key].file}`;
            predefinedData[key] = fileManager.readJsonFile(filePath);
        }
    }
};

const loadColumns = (body) => {

    for (const column of body.columns) {
        columns.push(column);
    }
};

const loadDataNames = () => {

    dataNames.length = 0;

    for (const column of columns) {
        dataNames.push(column.columnName);
    }
};

const getRow = () => {

    const data = getDataValues();
    const row = {};

    for (const column of columns) {
        row[column.columnName] = data[column.dataName];
    }

    return row;
};

const getDataValues = () => {

    const data = {};

    for (const column of columns) {

        configuration[column.dataName].type === 'predefined' ?
            setPredefinedDataValue(data, column) :
            setCustomDataValue(data, column);
    }

    return data;
};

const setPredefinedDataValue = (data, column) => {

    const index = getRandomNumber(0, predefinedData[column.dataName].count);

    if (configuration[column.dataName].keys !== null) {

        const randomDataRow = predefinedData[column.dataName].list[index];

        for (const dataName in configuration[column.dataName].keys) {
            data[dataName] = randomDataRow[configuration[column.dataName].keys[dataName]];
        }

    } else if (!data.hasOwnProperty(column.dataName)) {
        data[column.dataName] = predefinedData[column.dataName].list[index];
    }
}

const setCustomDataValue = (data, column) => {

    if (column.dataName === 'Number') {

        data[column.dataName] = getRandomNumber(
            column.settings.minimum,
            column.settings.maximum
        );

    } else if (column.dataName === 'Characters') {

        data[column.dataName] = getRandomString(column.settings);
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