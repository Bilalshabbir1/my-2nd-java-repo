// Ch # 8-14 | Concatenation | Prompts | if...else and else if statement
// Concatenate
document.getElementById("ConcatenateSomeString").onclick = function () {


    let message = "Assalam-u-Alaikum ";
    let Name = "Everyone";
    let banger = "!";
    let customMess = message + Name + banger;
    alert(customMess);
    document.write(message + Name + banger);
}
// Ask Name from user
document.getElementById("askNameFromUser").onclick = function () {

    let message = "Good day ";

    let firstName = prompt("please enter Your firstName");

    let lastName = prompt("please enter Your lastName");
    let banger = "!";
    let fullName = firstName + " " + lastName
    document.getElementById("OutPut").innerHTML = message + fullName + banger

    document.getElementById('statement').innerHTML = 'message + firstName + lastName';
    
}

// camparison operater
document.getElementById("comparisonOperators").onclick = function () {
    // Double Equal Sign / ==
    let firstValue = prompt('Enter the first value')
    let secondValue = prompt('Enter the second value')
    if (firstValue == secondValue) {
        alert('Yes, Number-1 == Number-2')
    }
    else {
        alert('The values are not equal')
    }
    // 3 Equal Sign / ===
    let firstNum = prompt('Enter the first number')
    let secondNum = prompt('Enter the second number')
    if (firstNum === secondNum) {
        alert('Yes, Number-1 === Number-2')
    }
    else {
        alert('Your are not correct')
    }
    // // Not Operator / !=
    let num1 = prompt('Enter the num1')
    let num2 = prompt('Enter the num2')
    if (num1 != num2) {
        alert('Yes, Number-1 != Number-2')
    }
    else {
        alert('Your are wrong')
    }
    // // Not Operator / !=
    let num01 = prompt('Enter the Number 1')
    let num02 = prompt('Enter the Number 2')
    if (num01 >= num02) {
        alert('Yes, Number-1 >= Number-2')
    }
    else {
        alert('Your are wrong')
    }
    document.getElementById("statement").innerHTML = 'Value-1 == Value-2 <br> Number-1 === Number-2  <br> Number-1 != Number-2 <br> Number-1 >= Number-2';
}


function checkComparisionOpertors() {
    alert("working!")
}





// if else if statement
document.getElementById("ifElseIf").onclick = function () {

    var age = 20;
    var age = prompt("enter your age ")
    if (age >= 18) {
        alert("you are  eligible");
    } else {
        alert("you are not eligible");
    }

}
// testing of set condition

document.getElementById("testingSetsOfconditon").onclick = function () {

    var language = prompt("Enter your language");

    if (language === "javaScript") {

        var city = prompt("Enter your city");
        if (city === "faisalabad") {
            var exp = prompt("Enter your experince");
            if (exp === "2 years") {
                alert("Congratulation,Hired")
            } else {
                alert("Need Experince")
            }
        } else {
            alert("Come faisalabad")
        }

    } else {
        alert("learn javaSacript")
    }
}

// if nested statement

document.getElementById("ifStatementNestd").onclick = function () {


    let age = +prompt("Enter your age?");
    age = 18;

    if (18 >= 18) {

        let weight = +prompt("Enter your weight?");
        if (weight <= 70) {

            alert("you're a samart man")
        } else {
            alert("you're a fat guy.")
        }
    } else {
        alert("you're baby")
    }

}

// login
document.getElementById("login").onclick = function () {

    var userName = prompt(" your User Name");

    var pass = prompt("your password");

    if (userName === "bilal" && pass === "123") {
        alert("user logged in")
    } else {
        alert("userName or password is incorect")
    }
}
// Original Statement Clear Button
document.getElementById("clearStatement btn").onclick = function () {
    document.getElementById("statement").innerHTML = ""
}

// Output Clear Button
document.getElementById("clearOutput btn").onclick = function () {
    document.getElementById("OutPut").innerHTML = ""
}



