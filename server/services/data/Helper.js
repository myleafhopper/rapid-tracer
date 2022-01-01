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

const { v4: uuidv4 } = require('uuid');
const creditCardManager = require('./CreditCardManager');
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
        if (configuration[key].file !== null &&
            !predefinedData.hasOwnProperty(configuration[key].file)) {
            const filePath = `server/predefined_data/${configuration[key].file}`;
            predefinedData[configuration[key].file] = fileManager.readJsonFile(filePath);
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

    const file = configuration[column.dataName].file;
    const keys = configuration[column.dataName].keys;
    const index = getRandomNumber(0, predefinedData[file].count);
    const row = predefinedData[file].list[index];

    for (const dataName in keys) {
        if (!data.hasOwnProperty(dataName)) {
            data[dataName] = row[keys[dataName]];
        }
    }
}

const setCustomDataValue = (data, column) => {

    if (column.dataName === 'App Version') {

        data[column.dataName] = getRandomNumber(1, 9) + '.' +
            getRandomNumber(1, 20) + '.' +
            getRandomNumber(1, 200);

    } else if (column.dataName === 'Boolean') {

        data[column.dataName] = getRandomValueFromList([false, true]);

    } else if (column.dataName === 'Credit Card Number') {

        const cardType = column.setup.creditCardType;
        data['Credit Card Number'] = creditCardManager.generateCardNumber(cardType);
        data['Credit Card Type'] = cardType;

    } else if (column.dataName === 'Custom List') {

        data[column.dataName] = getRandomValueFromList(column.setup.list);

    } else if (column.dataName === 'Date (DD/MM/YYYY)') {

        const date = getDateObject();
        data[column.dataName] = `${date['DD']}/${date['MM']}/${date['YYYY']}`;

    } else if (column.dataName === 'Date (MM/DD/YYYY)') {

        const date = getDateObject();
        data[column.dataName] = `${date['MM']}/${date['DD']}/${date['YYYY']}`;

    } else if (column.dataName === 'Email') {

        const number = getRandomNumber(1111, 9999);
        const lastName = getRandomValueFromList(predefinedData['last_names.json'].list);
        const provider = column.setup.provider === 'Random' ?
            getRandomValueFromList(['Gmail', 'Yahoo', 'Hotmail']) :
            column.setup.provider;

        data[column.dataName] = `${lastName}${number}@${provider}.com`;

    } else if (column.dataName === 'Full Name (Female)') {

        const firstName = getRandomValueFromList(predefinedData['female_first_names.json'].list);
        const lastName = getRandomValueFromList(predefinedData['last_names.json'].list);
        const fullName = `${firstName} ${lastName}`;

        data[column.dataName] = column.setup.capitalization === 'All Letters Uppercase' ?
            fullName.toUpperCase() : column.setup.capitalization === 'All Letters Lowercase' ?
                fullName.toLowerCase() : fullName;

    } else if (column.dataName === 'Full Name (Male)') {

        const firstName = getRandomValueFromList(predefinedData['male_first_names.json'].list);
        const lastName = getRandomValueFromList(predefinedData['last_names.json'].list);
        const fullName = `${firstName} ${lastName}`;

        data[column.dataName] = column.setup.capitalization === 'All Letters Uppercase' ?
            fullName.toUpperCase() : column.setup.capitalization === 'All Letters Lowercase' ?
                fullName.toLowerCase() : fullName;

    } else if (column.dataName === 'GUID') {

        data[column.dataName] = column.setup.capitalization ?
            uuidv4().toUpperCase() : uuidv4();

    } else if (column.dataName === 'Latitude') {

        data[column.dataName] = getGeoCoordinate(-90, 90, 3);

    } else if (column.dataName === 'Longitude') {

        data[column.dataName] = getGeoCoordinate(-180, 180, 3);

    } else if (column.dataName === 'Number') {

        data[column.dataName] = getRandomNumber(
            column.properties.minimum,
            column.properties.maximum
        );

    } else if (column.dataName === 'Password') {

        data[column.dataName] = getRandomString(column.setup);

    } else if (column.dataName === 'Phone Number (USA)') {

        data[column.dataName] = getRandomNumber(111, 999) +
            getRandomNumber(1111, 9999) +
            getRandomNumber(1111, 9999);

    } else if (column.dataName === 'Postal Code (USA)') {

        data[column.dataName] = getRandomNumber(11111, 99999);

    } else if (column.dataName === 'Social Security Number (USA)') {

        data[column.dataName] = getRandomNumber(111, 999) +
            getRandomNumber(11, 99) +
            getRandomNumber(1111, 9999);

    } else if (column.dataName === 'String') {

        data[column.dataName] = getRandomString(column.setup);

    } else if (column.dataName === 'Time (HH:MM)') {

        const date = getTimeObject();
        data[column.dataName] = `${date['HH']}:${date['MM']}`;

    } else if (column.dataName === 'Time (HH:MM:SS)') {

        const date = getTimeObject();
        data[column.dataName] = `${date['HH']}:${date['MM']}:${date['SS']}`;

    } else if (column.dataName === 'Time (HH:MM:SS.SSS)') {

        const date = getTimeObject();
        data[column.dataName] = `${date['HH']}:${date['MM']}:${date['SS']}.${date['SSS']}`;

    } else if (column.dataName === 'Username') {

        const number = getRandomNumber(1111, 9999);
        const lastName = getRandomValueFromList(predefinedData['last_names.json'].list);
        data[column.dataName] = `${lastName.toLowerCase()}${number}`;
    }
};

const getRandomValueFromList = (list) => {
    return list[getRandomNumber(0, list.length - 1)];
};

const getRandomNumber = (minimum, maximum) => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const getRandomString = (setup) => {

    let characters = '';

    if (setup.includeUpperCaseLetters) {
        characters = characters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (setup.includeLowerCaseLetters) {
        characters = characters + 'abcdefghijklmnopqrstuvwxyz';
    }

    if (setup.includeNumber) {
        characters = characters + '0123456789';
    }

    const collection = [];
    const minimum = 0;
    const maximum = characters.length;

    for (let i = 0; i < setup.length; i++) {
        collection.push(
            characters.charAt(
                Math.floor(Math.random() * (maximum - minimum)) + minimum
            )
        );
    }

    return collection.join('');
};

const getDateObject = () => {

    const date = new Date();

    return {
        'DD': date.getDate(),
        'MM': date.getMonth() + 1,
        'YYYY': date.getFullYear()
    };
};

const getGeoCoordinate = (start, end, decimalLength) => {
    return (Math.random() * (end - start) + start).toFixed(decimalLength) * 1;
};

const getTimeObject = () => {

    const date = new Date();

    return {
        'HH': date.getHours(),
        'MM': date.getMinutes(),
        'SS': date.getSeconds(),
        'SSS': date.getMilliseconds()
    };
};