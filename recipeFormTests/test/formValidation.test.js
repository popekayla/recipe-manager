var assert = require('chai').assert;
var validateName = require('../js/nameValidation');
var validateServing = require('../js/servingValidation');
var validateDifficulty = require('../js/difficultyValidation');
var validateIngredient = require('../js/ingredientValidation');
var validateInstruction = require('../js/instructionValidation');
var validateTime = require('../js/timeValidation');
var validateAmt = require('../js/amtValidation');

//Name Validation

describe("Testing Valid Recipe Name", function() {

    it('should not be an empty string', function() {
        assert.isFalse(validateName("   "));
    });
    it('should not be less than 3 characters', function() {
        assert.isFalse(validateName("ab"));
    });
    it('can have between 3 and 50 characters', function() {
        assert.isTrue(validateName("abcdefghij-klmnop 123"));
    });
    it('cannot have over 50 characters', function() {
        assert.isFalse(validateName("abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"));
    });
    it('can have special characters', function() {
        assert.isTrue(validateName("(),/*!%#@$^*-.~`'+="));
    });

});

/*
"" - fail
"ab" - fail
"abc" - pass
"123 - pass"
"abcdefghi jklmnop" - pass
"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz" - fail
"(),/*!%#@$^*-.~`" - pass
*/

//Servings Validation

describe("Testing Valid Recipe Serving", function() {

    it('should not be an empty string', function() {
        assert.isFalse(validateServing("   "));
    });
    it('should be a number', function() {
        assert.isTrue(validateServing(3));
    });
    it('can be a bigger number', function() {
        assert.isTrue(validateServing("30"));
   });

});

/*
" " - fail
"ab" - fail
"1" -pass
"10" - pass
"20" - pass
*/

//Time Validation
describe("Testing Valid Time Serving", function() {

    it('should not be an empty string', function() {
        assert.isFalse(validateTime("   "));
    });
    it('should be a number', function() {
        assert.isTrue(validateTime(3));
    });
    it('should not be a letter', function() {
        assert.isFalse(validateTime('e'));
    });
    it('should not be a special character', function(){
        assert.isFalse(validateTime('-+.'));
    });
   it('can be 0', function() {
       assert.isTrue(validateTime(0));
   });
   it('should not be over 60', function() {
       assert.isFalse(validateTime(70))
   })

});

/*
num input (0-60) followed by select minutes or hour
" " - fail
"70 minutes" - fail
"30 minutes" - true
"30 min" - false
"10 hours" - true
"10 hrs" - false
"30" - false
"minutes" - false
*/

//Dificulty Validation

describe("Testing Valid Difficulty Input", function() {
    it("should not be empty", function() {
        assert.isFalse(validateDifficulty(" "));
    });
});

/*
dropdown select
" " - fail
"Easy" - true
"Medium" - true
"Hard" - true
"Okay" -false
*/

//Ingredient Amount Validation

describe("Testing Valid Time Serving", function() {

    it('should not be an empty string', function() {
        assert.isFalse(validateAmt("   "));
    });
    it('should be a number', function() {
        assert.isTrue(validateAmt(3));
    });
    it('should not be a letter', function() {
        assert.isFalse(validateAmt('e'));
    });
    it('should not be a special character', function(){
        assert.isFalse(validateAmt('-+'));
    });
   it('can be 0', function() {
       assert.isTrue(validateAmt(0));
   });
   it('can be a decimal', function() {
       assert.isTrue(validateAmt(1.5));
   });

});

/*
0 - pass
10 - pass
100 - pass
0.1 - paa
1/2 - pass
*/

//Ingredient Validation

describe("Testing Valid Ingredient Input", function() {

    it('should not be an empty string', function() {
        assert.isFalse(validateIngredient("   "));
    });
    it('should not be less than 3 characters', function() {
        assert.isFalse(validateIngredient("ab"));
    });
    it('can have between 3 and 255 characters', function() {
        assert.isTrue(validateIngredient("abcdefghij-klmnop 123"));
    });
    it('cannot have over 255 characters', function() {
        assert.isFalse(validateIngredient("abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"));
    });
    it('can have special characters', function() {
        assert.isTrue(validateIngredient("(),/*!%#@$^*-.~`'+="));
    });

})

/*
" " - fail
"ab" - fail
"abc" - pass
"123" - pass
"abcdefghi jklmnop" - pass
"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz" - pass
"String with over 255 charactesr" - fail
"(),/*!%#@$^*-.~`" - pass
*/

//Instruction Validation

describe("Testing Valid Instruction Input", function() {

    it('should not be an empty string', function() {
        assert.isFalse(validateInstruction("   "));
    });
    it('should not be less than 3 characters', function() {
        assert.isFalse(validateInstruction("ab"));
    });
    it('can have between 3 and 1023 characters', function() {
        assert.isTrue(validateInstruction("abcdefghij-klmnop 123"));
    });
    it('cannot have over 1023 characters', function() {
        assert.isFalse(validateInstruction("abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"));
    });
    it('can have special characters', function() {
        assert.isTrue(validateInstruction("(),/*!%#@$^*-.~`'+="));
    });

})

/*
" " - fail
"ab" - fail
"abc" - pass
"123" - pass
"abcdefghi jklmnop" - pass
"abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz" - pass
"String with over 1023 charactesr" - fail
"(),/*!%#@$^*-.~`" - pass
*/