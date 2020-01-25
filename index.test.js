const {algo} = require('./index');

describe('algo', () => {
    [
        {input: '', output: ''},
        {input: 'A', output: 'A'},
        {input: 'AB', output: 'A'},
        {input: 'ABB', output: 'BB'},
        {input: 'ABBA', output: 'BB'},
        {input: 'ABBAA', output: 'BB'},
        {input: 'ABBAAA', output: 'AAA'},
        {input: 'ABBAAABBBCCCCA', output: 'CCCC'},
    ].forEach(({input, output}) => {
        it(`returns ${output || 'an empty string'} when input is ${input || 'an empty string'}`, () => {
            expect(algo(input)).toBe(output);
        });
    });
});
