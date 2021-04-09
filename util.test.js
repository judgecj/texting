const { test } = require('@jest/globals');
const { generateText , giveName , checkAPI} = require('./util');

// test case that proves that your application handles http404 

test('test url new testing api', ()=>{
    const newdata = checkAPI("https://jsonplaceholder.typicode.com/albums")
    expect(newdata).toEqual(300);
 })

 /// testing name and age

test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

// check one name

test(' check one name', () => {
    const one = giveName('Max');
    expect(one).toBe('Max ( years old now)');
});


