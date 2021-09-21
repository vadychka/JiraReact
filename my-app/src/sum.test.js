// import sum from './testing'
const sum = require('./testing');


test('testing sum', ()=> {
   expect(sum(1,2)).toBe(3)
})