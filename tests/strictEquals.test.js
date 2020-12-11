var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var compare = require('../strictEquals')

describe('strictEquals', () => {
  it('returns true if both passed numbers are strictly equal "==="', () => {
    var a = 5
    var b = 5
    var answer = compare(a, b)

    expect(answer).to.equal(true)
  }) 
})

describe('strictEquals', () => {
  it('returns true if both passed characters are strictly equal "==="', () => {
    var a = 'a'
    var b = 'a'
    var answer = compare(a, b)
  
    expect(answer).to.equal(true)
  }) 
})

describe('strictEquals', () => {
  it('returns true if both passed values are strictly equal "==="', () => {
    var a = 5
    var b = 'a'
    var answer = compare(a, b)
    
    expect(answer).to.equal(false)
  }) 
})
