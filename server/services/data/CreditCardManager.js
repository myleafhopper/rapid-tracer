/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.generateCardNumber = (cardType) => {

    if (cardType !== undefined &&
        configuration.hasOwnProperty(cardType.toLowerCase())) {

        const key = cardType.toLowerCase();
        const prefixList = configuration[key].prefixList;
        const randomIndex = Math.floor(Math.random() * prefixList.length);
        const prefix = prefixList[randomIndex];
        const digitCount = configuration[key].digitCount;
        return getCompletedCreditCardNumber(prefix, digitCount);

    } else {

        const prefixList = configuration.visa.prefixList;
        const randomIndex = Math.floor(Math.random() * prefixList.length);
        const prefix = prefixList[randomIndex];
        const digitCount = configuration.visa.digitCount;
        return getCompletedCreditCardNumber(prefix, digitCount);
    }
};

/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const configuration = {
    visa: {
        digitCount: 16,
        prefixList: [
            '4539',
            '4556',
            '4916',
            '4532',
            '4929',
            '40240071',
            '4485',
            '4716',
            '4'
        ]
    },
    mastercard: {
        digitCount: 16,
        prefixList: [
            '51',
            '52',
            '53',
            '54',
            '55'
        ]
    },
    discover: {
        digitCount: 16,
        prefixList: [
            '6011'
        ]
    },
    amex: {
        digitCount: 15,
        prefixList: [
            '34',
            '37'
        ]
    },
    diners: {
        digitCount: 16,
        prefixList: [
            '300',
            '301',
            '302',
            '303',
            '36',
            '38'
        ]
    },
    enroute: {
        digitCount: 16,
        prefixList: [
            '2014',
            '2149'
        ]
    },
    jcb: {
        digitCount: 16,
        prefixList: [
            '35'
        ]
    },
    voyager: {
        digitCount: 16,
        prefixList: [
            '8699'
        ]
    }
};

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

const getCompletedCreditCardNumber = (prefix, digitCount) => {

    let creditCardNumber = prefix;

    while (creditCardNumber.length < (digitCount - 1)) {

        creditCardNumber = creditCardNumber +
            Math.floor(Math.random() * 10);
    }

    const checkDigit = getCheckDigit(creditCardNumber, digitCount);
    return creditCardNumber + checkDigit;
};

const getCheckDigit = (creditCardNumber, digitCount) => {

    const reversedCreditCardNumber = getReversedCreditCardNumber(creditCardNumber);
    let position = 0;
    let total = 0;

    while (position < digitCount - 1) {

        let odd = reversedCreditCardNumber[position] * 2;

        if (odd > 9) {
            odd = odd - 9;
        }

        total = total + odd;

        if (position !== (digitCount - 2)) {
            total = total + reversedCreditCardNumber[position + 1];
        }

        position = position + 2;
    }

    return ((Math.floor(total / 10) + 1) * 10 - total) % 10;
};

const getReversedCreditCardNumber = (creditCardNumber) => {

    const reversedCreditCardDigits = creditCardNumber.split("").reverse().join("");
    const reversedCreditCardNumber = [];

    for (const digit of reversedCreditCardDigits) {
        reversedCreditCardNumber.push(Number(digit));
    }

    return reversedCreditCardNumber;
};