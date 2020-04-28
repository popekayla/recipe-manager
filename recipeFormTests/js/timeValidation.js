var validateTime = function(inTime) {
    let regEx = /\d/

    if (regEx.test(inTime) && inTime >= 0 && inTime <= 60) {
        return true;
    } else {
        return false;
    }
};

module.exports = validateTime;