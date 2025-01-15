console.log("Connected");

let numberBox = document.getElementById("number")
let wordBox = document.getElementById("words")

function converter(number) {
    const oneDigit = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const twoDigits = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const twoDigitsTens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninty"];

    function funcOneDigit(number) {
        wordBox.value = oneDigit[number]
    }

    function funcTwoDigit(number) {
        if (number >= 10 && number <= 19) {
            wordBox.value = twoDigits[number.slice(-1)]
        }
        if (number >= 20) {
            wordBox.value = twoDigitsTens[Math.floor(number / 10)]
            let mod = number % 10
            if (mod > 0) {
                wordBox.value += "-" + oneDigit[mod]
            }
        }
    }

    function funcThreeDigits(number) {
        if (number % 100 == 0) {
            let unit = number / 100
            wordBox.value = oneDigit[unit] + " hundred ";
        }
        if (number % 100 != 0) {
            let unit = Math.floor(number / 100)
            wordBox.value = oneDigit[unit] + " hundred ";
            let mod = number % 100
            if (mod < 10 && mod > 0) {
                wordBox.value += "and " + oneDigit[mod]
            }
            if (mod >= 10 && mod <= 19) {
                wordBox.value += "and " + twoDigits[mod - 10]
            }
            if (mod >= 20) {
                wordBox.value += "and " + twoDigitsTens[Math.floor(mod / 10)]
                mod = mod % 10
                if (mod > 0) {
                    wordBox.value += "-" + oneDigit[mod]
                }
            }
        }
    }

    function funcFourDigits(number) {
        let firstHalf = number.slice(0, 1)
        let secondHalf = number.slice(1, 4)

        if (firstHalf > 0 && firstHalf < 10) {
            wordBox.value = oneDigit[firstHalf] + " thousand "
        }
        if (secondHalf >= 100) {
            if (secondHalf % 100 == 0) {
                let unit = secondHalf / 100
                wordBox.value += oneDigit[unit] + " hundred ";
            }
            if (secondHalf % 100 != 0) {
                if (secondHalf % 100 >= 10) {
                    let unit = Math.floor(secondHalf / 100)
                    wordBox.value += oneDigit[unit] + " hundred ";
                    let mod = secondHalf % 100
                    if (mod < 10 && mod > 0) {
                        wordBox.value += "and " + oneDigit[mod]
                    }
                    if (mod >= 10 && mod <= 19) {
                        wordBox.value += "and " + twoDigits[mod - 10]
                    }
                    if (mod >= 20) {
                        wordBox.value += "and " + twoDigitsTens[Math.floor(mod / 10)]
                        mod = mod % 10
                        if (mod > 0) {
                            wordBox.value += "-" + oneDigit[mod]
                        }
                    }
                }
            }
        }
        if (secondHalf < 100) {
            if (secondHalf > 0 && secondHalf < 10) {
                wordBox.value += oneDigit[secondHalf.slice(-1)]
            }
            if (secondHalf >= 10 && secondHalf <= 19) {
                wordBox.value += twoDigits[secondHalf.slice(-1)]
            }
            if (secondHalf >= 20) {
                wordBox.value += twoDigitsTens[Math.floor(secondHalf / 10)]
                let mod = number % 10
                if (mod > 0) {
                    wordBox.value += "-" + oneDigit[mod]
                }
            }
        }
    }

    function funcFiveDigits(number) {
        let firstHalf = number.slice(0, 2)
        let secondHalf = number.slice(2, 5)

        if (firstHalf >= 10 && firstHalf <= 19) {
            wordBox.value = oneDigit[firstHalf] + " thousand "
        }
        if (firstHalf >= 20) {
            wordBox.value = twoDigitsTens[Math.floor(firstHalf / 10)]
            let mod = firstHalf % 10
            if (mod == 0) {
                wordBox.value += " thousand "
            }
            if (mod > 0) {
                wordBox.value += "-" + oneDigit[mod] + " thousand "
            }
        }
        if (secondHalf >= 100) {
            if (secondHalf % 100 == 0) {
                let unit = secondHalf / 100
                wordBox.value += oneDigit[unit] + " hundred ";
            }
            if (secondHalf % 100 != 0) {
                if (secondHalf % 100 >= 10) {
                    let unit = Math.floor(secondHalf / 100)
                    wordBox.value += oneDigit[unit] + " hundred ";
                    let mod = secondHalf % 100
                    if (mod < 10 && mod > 0) {
                        wordBox.value += "and " + oneDigit[mod]
                    }
                    if (mod >= 10 && mod <= 19) {
                        wordBox.value += "and " + twoDigits[mod - 10]
                    }
                    if (mod >= 20) {
                        wordBox.value += "and " + twoDigitsTens[Math.floor(mod / 10)]
                        mod = mod % 10
                        if (mod > 0) {
                            wordBox.value += "-" + oneDigit[mod]
                        }
                    }
                }
            }
        }
        if (secondHalf < 100) {
            if (secondHalf > 0 && secondHalf < 10) {
                wordBox.value += oneDigit[secondHalf.slice(-1)]
            }
            if (secondHalf >= 10 && secondHalf <= 19) {
                wordBox.value += twoDigits[secondHalf.slice(-1)]
            }
            if (secondHalf >= 20) {
                wordBox.value += twoDigitsTens[Math.floor(secondHalf / 10)]
                let mod = number % 10
                if (mod > 0) {
                    wordBox.value += "-" + oneDigit[mod]
                }
            }
        }
    }

    function funcSixDigits(number) {
        let firstHalf = number.slice(0, 3)
        let secondHalf = number.slice(3, 6)

        if (firstHalf % 100 == 0) {
            let unit = firstHalf / 100
            wordBox.value = oneDigit[unit] + " hundred thousand ";
        }
        if (firstHalf % 100 != 0) {
            let unit = Math.floor(firstHalf / 100)
            wordBox.value = oneDigit[unit] + " hundred ";
            let mod = firstHalf % 100
            if (mod < 10 && mod > 0) {
                wordBox.value += "and " + oneDigit[mod] + " thousand "
            }
            if (mod >= 10 && mod <= 19) {
                wordBox.value += "and " + twoDigits[mod - 10] + " thousand "
            }
            if (mod >= 20) {
                wordBox.value += "and " + twoDigitsTens[Math.floor(mod / 10)]
                mod = mod % 10
                if (mod == 0)
                    wordBox.value += " thousand "
                if (mod > 0) {
                    wordBox.value += "-" + oneDigit[mod] + " thousand "
                }
            }
        }
        if (secondHalf >= 100) {
            if (secondHalf % 100 == 0) {
                let unit = secondHalf / 100
                wordBox.value += oneDigit[unit] + " hundred ";
            }
            if (secondHalf % 100 != 0) {
                if (secondHalf % 100 >= 10) {
                    let unit = Math.floor(secondHalf / 100)
                    wordBox.value += oneDigit[unit] + " hundred ";
                    let mod = secondHalf % 100
                    if (mod < 10 && mod > 0) {
                        wordBox.value += "and " + oneDigit[mod]
                    }
                    if (mod >= 10 && mod <= 19) {
                        wordBox.value += "and " + twoDigits[mod - 10]
                    }
                    if (mod >= 20) {
                        wordBox.value += "and " + twoDigitsTens[Math.floor(mod / 10)]
                        mod = mod % 10
                        if (mod > 0) {
                            wordBox.value += "-" + oneDigit[mod]
                        }
                    }
                }
            }
        }
        if (secondHalf < 100) {
            if (secondHalf > 0 && secondHalf < 10) {
                wordBox.value += oneDigit[secondHalf.slice(-1)]
            }
            if (secondHalf >= 10 && secondHalf <= 19) {
                wordBox.value += twoDigits[secondHalf.slice(-1)]
            }
            if (secondHalf >= 20) {
                wordBox.value += twoDigitsTens[Math.floor(secondHalf / 10)]
                let mod = number % 10
                if (mod > 0) {
                    wordBox.value += "-" + oneDigit[mod]
                }
            }
        }
    }

    if (typeof numberBox.value != typeof 1) {
        wordBox.value = "You need to enter only numbers!"
        if (numberBox.value == "") {
            wordBox.value = "";
        }
    }
    if (numberBox.value == "0") {
        wordBox.value = "zero"
    }
    if (numberBox.value > 1000000) {
        wordBox.value = "This converter works only for numbers 0 - 1,000,000"
    }
    if (numberBox.value == 1000000) {
        wordBox.value = "one million"
    }
    if (numberBox.value < 1000000 && numberBox.value > 0) {
        if ((numberBox.value).length == 1) {
            funcOneDigit(numberBox.value)
        }
        if ((numberBox.value).length == 2) {
            funcTwoDigit(numberBox.value)
        }
        if ((numberBox.value).length == 3) {
            funcThreeDigits(numberBox.value)
        }
        if ((numberBox.value).length == 4) {
            funcFourDigits(numberBox.value)
        }
        if ((numberBox.value).length == 5) {
            funcFiveDigits(numberBox.value)
        }
        if ((numberBox.value).length == 6) {
            funcSixDigits(numberBox.value)
        }
    }
}
numberBox.addEventListener("input", function (e) {
    converter(numberBox.value)
})
