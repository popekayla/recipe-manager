var validateDifficulty = function(inDiff) {
    let regEx = /[easymdiumhrd]/i

    if (regEx.test(inDiff)) {
        return true;
    } else {
        return false;
    }
};

module.exports = validateDifficulty;