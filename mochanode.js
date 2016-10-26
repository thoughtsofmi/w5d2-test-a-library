var chai = require('chai')
var expect = chai.expect

function increment(value = -1, incrementBy = 1){
    return value + incrementBy
} //kind of like an add function

describe('increment()', function(){
    it('should exist', function(){
        expect(increment).to.be.a('function')
    })
    it('should return 0 when value is undefined', function(){
        expect(increment()).to.equal(0)
    })//need a value to default, so -1 to return 0
    it('should return 1 when value is 0', function(){
        expect(increment()).to.equal(1)
    })
    it('should return 10 when value is 0 and increment value is 10', function(){
        expect(increment(0, 10)).to.equal(10)
    })
})
/// how to use in terminal
