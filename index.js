function reverseStr(str) {
    return str.split("").reverse().join("");
}

function checkPalindrome(str) {
    if (str === stringReverse(str)) {
      return true;
    }
    return false;
}

function dateToString(date) {
    var dateStr = {
        day : "",
        month : "",
        year : "",
    };

    if (date.day < 10) {
        dateStr.day = "0" + date.day;
    }
    else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = "0" + date.month;
    }
    else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;
}

function getAllDateFormats(date) {
    var dataStr = dateToString(date);

    var ddmmyyyy = dataStr.day + dataStr.month + dataStr.year;
    var mmddyyyy = dataStr.month + dataStr.day + dataStr.year;
    var yyyymmdd = dataStr.year + dataStr.month + dataStr.day;
    var ddmmyy = dataStr.day + dataStr.month + dataStr.year.slice(-2);
    var mmddyy = dataStr.month + dataStr.day + dataStr.year.slice(-2);
    var yymmdd = dataStr.year.slice(-2) + dataStr.month + dataStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {
    var listOfDateFormats = getAllDateFormats(date);

    flag = false;
    
    for (var i = 0; i < listOfDateFormats.length; i++) {
        if (checkPalindrome(listOfDateFormats[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}

function isLeapYear(year) {
    if (year % 400) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

function getNextDate(date) {
    var day = date.day + 1; // increment the day
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // check for february
    if (month === 2) {
        if(isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        }
        else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    }
    else {
        // check if day exceeds the max days in month
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

}

function getNextPalindromeDate(date) {
    var ctrNext = 0;
    var nextDate = getNextDate(date);

    while(1) { // infinite loop
        ctrNext++;
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if (isPalindrome) {
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [ctrNext, nextDate];
}

function getPreviousDate(date) {
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day === 0) {
        month--;
        if (month === 0) {
            month = 12;
            day = 31;
            year--;
        }
        else if (month === 2) {
            if (isLeapYear(year)) {
                day = 29;
            }
            else {
                day = 28;
            }
        }
        else {
            day = daysInMonth[month - 1];
        }

    }

}

function getPreviousPalindromeDate(date) {
    var ctrPrev = 0;
    var prevDate = getPreviousDate(date);

    while(1) {
        ctrPrev++;
        var isPalindrome = checkPalindromeForAllDateFormats(prevDate);
        if (isPalindrome) {
            break;
        }
        prevDate = getPreviousDate(prevDate);
    }
    return [ctrPrev, prevDate];
}



var dateInput = document.querySelector("#bday-input");
var checkBtn = document.querySelector("#check-btn");
var result = document.querySelector("#result")

function clickHandler() {
    var bdayStr = dateInput.value;

    if (bdayStr !== "") { //taking care of empty str
        var listOfDate = bday.split("-"); //returns array
        var date = {
            day : Number(listOfDate[2]),
            month : Number(listOfDate[1]),
            year : Number(listOfDate[0])
        };

        var isPalindrome = checkPalindromeForAllDateFormats(date);

        if (isPalindrome) {
            result.innerText = "Yayy! Your birthday is a palindrome! 🥳";
        }
        else {
            var [ctrNext, nextDate] = getNextPalindromeDate(date);
            result.innerText = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}. You missed it by ${ctrNext} days! 😔`
        }

    }
}

checkBtn.addEventListener('click', clickHandler);