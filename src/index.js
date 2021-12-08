module.exports = function reverse (n) {
    "use strict";
    let reverseNum = 0;
    let tmp = n;
    if (tmp < 0) {
        tmp = tmp * (-1);
    }
    while (tmp > 0) {
        reverseNum = reverseNum * 10 + tmp % 10;
        tmp = parseInt(tmp / 10);
    }
    return reverseNum;   
}
