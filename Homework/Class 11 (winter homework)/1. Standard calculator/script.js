console.log("Connected");

function calculator() {

    let calculation = document.getElementById("calculation");
    let result = document.getElementById("result");
    let btnC = document.getElementById("c");
    let btnBackspace = document.getElementById("backspace");
    let btnDivide = document.getElementById("divide");
    let btn7 = document.getElementById("7");
    let btn8 = document.getElementById("8");
    let btn9 = document.getElementById("9");
    let btnMultiply = document.getElementById("multiply");
    let btn4 = document.getElementById("4");
    let btn5 = document.getElementById("5");
    let btn6 = document.getElementById("6");
    let btnSubstract = document.getElementById("substract");
    let btn1 = document.getElementById("1");
    let btn2 = document.getElementById("2");
    let btn3 = document.getElementById("3");
    let btnAdd = document.getElementById("add");
    let btnDecimal = document.getElementById("decimal");
    let btn0 = document.getElementById("0");
    let btnEqual = document.getElementById("equal");
    let extraDisplay = document.getElementById("extraDisplay");
    let buttons = document.getElementsByClassName("button");

    let nums = []
    let opps = []

    let results = 0
    function calculate() {
        for (let i = 0; i < opps.length; i++) {
            if (opps[i] == "×" || opps[i] == "÷") {
                if (opps[i] == "×") {
                    if (opps.length > 1) {
                        results = nums[i] * nums[i + 1];
                        nums.splice(i, 2, results);
                        opps.splice(i, 1);
                    }
                    if (opps.length == 1) {
                        results = nums[i] * nums[i + 1];
                        result.innerText = results
                    }
                }
                if (opps[i] == "÷") {
                    if (opps.length > 1) {
                        results = nums[i] / nums[i + 1];
                        nums.splice(i, 2, results);
                        opps.splice(i, 1);

                    }
                    if (opps.length == 1) {
                        results = nums[i] / nums[i + 1];
                        result.innerText = results
                    }
                }
                i = 0
            }
        }
        for (let i = 0; i < opps.length; i++) {
            if (opps[i] == "+" || opps[i] == "-") {
                if (opps[i] == "+") {
                    if (opps.length > 1) {
                        results = nums[i] + nums[i + 1];
                        nums.splice(i, 2, results);
                        opps.splice(i, 1);
                    }
                    if (opps.length == 1) {
                        results = nums[i] + nums[i + 1];
                        result.innerText = results
                    }
                }
                if (opps[i] == "-") {
                    if (opps.length > 1) {
                        results = nums[i] - nums[i + 1];
                        nums.splice(i, 2, results);
                        opps.splice(i, 1);
                    }
                    if (opps.length == 1) {
                        results = nums[i] - nums[i + 1];
                        result.innerText = results
                    }
                }
                i = 0
            }
        }
    }

    function btnsNum(button) {
        button.addEventListener("click", function (e) {
            e.preventDefault()
            if (calculation.textContent.slice(-1) == btnEqual.textContent) {
                return
            }
            if (result.textContent.length < 15 || result.textContent == "") {
                result.innerText += button.textContent;
                extraDisplay.textContent = "";
            }
            if (result.textContent.length >= 15) {
                extraDisplay.textContent = "Can't enter more than 15 digits"
            }
        })
    }

    function btnsOpp(button) {
        button.addEventListener("click", function (e) {
            e.preventDefault()
            if ((calculation.textContent.slice(-1) == btnDivide.textContent ||
                calculation.textContent.slice(-1) == btnMultiply.textContent ||
                calculation.textContent.slice(-1) == btnSubstract.textContent ||
                calculation.textContent.slice(-1) == btnAdd.textContent) &&
                (result.textContent == "" || result.textContent.slice(-1) == btnDecimal.textContent)) {
                return
            }
            if (calculation.textContent == "" && result.textContent == "") {
                return
            }
            if ((calculation.textContent.slice(-1) == btnDivide.textContent) &&
                (result.textContent == btn0.textContent)) {
                extraDisplay.textContent = "You can't divide with zero(0)"
                return
            }
            if (calculation.textContent.slice(-1) == btnEqual.textContent) {
                return
            }
            else
                nums.push(parseFloat(result.textContent))
            opps.push(button.textContent)
            calculation.innerText += result.textContent + button.textContent
            result.innerText = ""
            extraDisplay.textContent = "";
        })
    }

    btnsNum(btn9)
    btnsNum(btn8)
    btnsNum(btn7)
    btnsNum(btn6)
    btnsNum(btn5)
    btnsNum(btn4)
    btnsNum(btn3)
    btnsNum(btn2)
    btnsNum(btn1)
    btnsNum(btn0)
    btnsOpp(btnDivide)
    btnsOpp(btnMultiply)
    btnsOpp(btnSubstract)
    btnsOpp(btnAdd)

    btnC.addEventListener("click", function (e) {
        e.preventDefault()
        calculation.innerText = "";
        result.innerText = "";
        extraDisplay.innerText = "";
        results = 0
        nums = []
        opps = []
    })
    btnBackspace.addEventListener("click", function (e) {
        e.preventDefault()
        if (calculation.textContent.slice(-1) == btnEqual.textContent) {
            return
        }
        if (extraDisplay.textContent != "") {
            result.textContent = result.textContent.slice(0, -1);
            result.innerText = result.textContent;
            extraDisplay.textContent = ""
        }
        else
            result.textContent = result.textContent.slice(0, -1);
        result.innerText = result.textContent;
    })

    btnDecimal.addEventListener("click", function (e) {
        e.preventDefault()
        let decimal = /[.]/
        if (result.textContent == "") {
            return
        }
        if (calculation.textContent.slice(-1) == btnEqual.textContent) {
            return
        }
        if (decimal.test(result.textContent) === true) {
            return
        }
        else
            result.textContent += btnDecimal.textContent
    })

    btnEqual.addEventListener("click", function (e) {
        e.preventDefault()
        if ((calculation.textContent.slice(-1) == btnDivide.textContent ||
            calculation.textContent.slice(-1) == btnMultiply.textContent ||
            calculation.textContent.slice(-1) == btnSubstract.textContent ||
            calculation.textContent.slice(-1) == btnAdd.textContent) &&
            (result.textContent == "" || result.textContent.slice(-1) == btnDecimal.textContent)) {
            return
        }
        if (calculation.textContent.slice(-1) == btnEqual.textContent) {
            return
        }
        if ((calculation.textContent.slice(-1) == btnDivide.textContent) &&
            (result.textContent == btn0.textContent)) {
            extraDisplay.textContent = "You can't divide with zero(0)"
            return
        }
        else
            nums.push(parseInt(result.textContent))
        calculation.innerText += result.textContent + "="
        extraDisplay.textContent = ""
        console.log(nums)
        console.log(opps)

        calculate()
    })

}

calculator()