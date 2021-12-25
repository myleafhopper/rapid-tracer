/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.getRows = (body) => {

    const predefinedData = getPredefinedData();
    const rows = [];

    for (let i = 0; i < body.count; i++) {
        rows.push(getRow(body, predefinedData));
    }

    return rows;
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getPredefinedData = () => {

    const fileManager = new (require('../../core/system/FileManager'));
    const configuration = require('./configuration.json');
    const predefinedData = {};

    for (const item of configuration) {

        const filePath = `server/predefined_data/${item.dataFile}`;
        predefinedData[item.name] = fileManager.readJsonFile(filePath);
    }

    return predefinedData;
};

const getRow = (body, predefinedData) => {

    const row = {};

    for (const column of body.setup) {

        if (column.type === 'predefined') {

            const list = predefinedData[column.name];
            const index = getRandomNumber(0, list.length - 1);
            row[column.columnName] = list[index];

        } else {

            row[column.columnName] = getCustomDataValue(column);
        }
    }

    return row;
};

const getCustomDataValue = (column) => {

    if (column.name === 'Number') {

        return getRandomNumber(
            column.settings.minimum,
            column.settings.maximum
        );

    } else if (column.name === 'Characters') {

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