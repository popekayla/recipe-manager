var validateName = function(inName) {
    let regEx = /^[\S](.){3,50}$/

    if (regEx.test(inName)) {
        return true;
    } else {
        return false;
    }
};

module.exports = validateName;