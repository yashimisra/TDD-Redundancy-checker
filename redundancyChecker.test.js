// add function

// success case
//  should return yes, if words are repeated in a sentence
//  should return no, if words are not repeated in a sentence

// failure
//  should return invalid input if input is number
//  should return invalid input if input is array

const repeatedWords = require('./redundancyChecker');
describe('add function', function() {
    it('should return yes, if words are repeated in a sentence', function() {
        const ans = repeatedWords('hi! My name is Vriti is');
        expect(ans).toBe('yes');
    });
    it('should return no, if words are not repeated in a sentence', function() {
        const ans = repeatedWords('hi! My name is Vriti');
        expect(ans).toBe('no');
    });
    it('should return invalid input if input is number', function() {
        const ans = repeatedWords(27.9);
        expect(ans).toBe('invalid input');
    });
    it('should return invalid input if input is array', function() {
        const arr=[2,3,4]
        const ans = repeatedWords(arr)
        expect(ans).toBe('invalid input');
    });
});
//./node_modules/.bin/jest.cmd ./redundancyChecker.test.js