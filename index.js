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
        if (day >daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

}