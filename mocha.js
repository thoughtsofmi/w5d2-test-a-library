
var expect = chai.expect

//console.log(expect) /// checking to see if it works

//checking for var one
describe('MoDom Library', function(){
    describe('one() Function', function(){
        it('should return an object', function(){
            expect(typeof md.one('div')).to.equal('object')
        })
    })
})
//one()Function should return an object

describe('add() Function', function(){
        it('should be 2', function(){
            expect(md.add(1,1)).to.equal(2)
        })
    })
//one()Function should return an object


describe('DOM Methods', function(){
    describe('body', function(){
        it('should have 8 children', function(){
            expect(document.body.children.length).to.be.equal(8)
        })
    })
})
describe('DOM Methods Range', function(){
    describe('body', function(){
        it('should have 7-9 children', function(){
            expect(document.body.children.length).to.be.within(7,9)
        })
    })
})
describe('DOM Methods', function(){
    describe('body', function(){
        it('should have 7-10 children', function(){
            document.body.children.length.should.be.within(7,10)
        })
        it('should have 7-10 children', function(){
            expect(document.body.children.length).to.be.within(7,10)
        })
        it('should have 7-10 children', function(){
            assert.isTrue(document.body.children.length<= 7 && document.body.children.length<= 10)
        })
    })
})



// describe('MoDom Library', function(){
//     it('md should exist', function(){)
//     expect(md.to.exist
//     })
//     describe('one() Function', function(){
//         it('should return an object', function(){
//             expect(typeof md.one('div')).to.equal('object')
//         })
    //     it('should be the mocha div', function(){
    //         expect(typeof md.one('div'.id)).to.equal('object')
    // })
// })
//one()Function should return an object
