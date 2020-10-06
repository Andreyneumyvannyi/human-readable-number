module.exports = function toReadable(number) {
    let numbersName = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let dozens = number % 100;
    let units = dozens % 10;
    let arrNum = [];

    if (number === 0) {
        arrNum.unshift(number);
    }

    while (number) {
        arrNum.unshift(number % 10);
        number = Math.floor(number / 10);
    }

    if (arrNum.length === 1) {
        return `${numbersName[arrNum[0]]}`;
    }

    if (arrNum.length === 2) {
        if (units === 0) {
            return `${numbersName[dozens]}`;
        }

        if (units > 0) {
            if (dozens >= 11 && dozens <= 19) {
                return `${numbersName[dozens]}`;
            } else {
                return `${numbersName[arrNum[0] * 10]} ${
                    numbersName[arrNum[1]]
                }`;
            }
        }
    }

    if (arrNum.length === 3) {
        if (dozens === 0) {
            return `${numbersName[arrNum[0]]} hundred`;
        }

        if (dozens > 0) {
            if (dozens >= 1 && dozens <= 19) {
                return `${numbersName[arrNum[0]]} hundred ${
                    numbersName[dozens]
                }`;
            }

            if (dozens > 19) {
                if (units === 0) {
                    return `${numbersName[arrNum[0]]} hundred ${
                        numbersName[arrNum[1] * 10]
                    }`;
                }

                if (units > 0) {
                    return `${numbersName[arrNum[0]]} hundred ${
                        numbersName[arrNum[1] * 10]
                    } ${numbersName[arrNum[2]]}`;
                }
            }
        }
    }
};
