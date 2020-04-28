var validateInstruction = function(inInstruction) {
    let regEx = /^[\S](.){3,1023}$/

    if (regEx.test(inInstruction)) {
        return true;
    } else {
        return false;
    }
};

module.exports = validateInstruction;