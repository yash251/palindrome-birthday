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