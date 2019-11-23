function telephoneCheck(str) {
    // Good luck!
    var numsAndOthers = "0123456789-() ";
    var nums = "0123456789";
    var numCounter = 0;
    var brackets = "()";
    var bracketCounter = 0;
    for (var i = 0; i < str.length; i++) {
        if (numsAndOthers.indexOf(str.charAt(i)) == -1) {
            return false;
        }
    }
    for (var i = 0; i < str.length; i++) {
        if (nums.indexOf(str.charAt(i)) != -1) {
            numCounter++;

        }

    }
    if (numCounter < 10 || numCounter >= 12) {
        return false;
    }

    for (var i = 0; i < str.length; i++) {
        if (brackets.indexOf(str.charAt(i)) != -1) {
            bracketCounter++;

        }

    }
    if (bracketCounter % 2 != 0) {
        return false;
    }
    if (str.charAt(0) == "(") {
        if (str.charAt(4) == ")") {

        } else {
            return false;
        }
    }
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "(") {
            if (str.charAt(i + 4) == ")") {

            } else {
                return false
            }

        }

    }
    if (numCounter == 11 && str.charAt(0) != 1) {
        return false;
    }

    return true;
}

telephoneCheck("1 555-555-5555")