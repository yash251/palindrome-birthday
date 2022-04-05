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