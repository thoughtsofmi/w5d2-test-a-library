// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

describe('MoDom Example', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })
})

describe('MoDom Library', function(){
    describe('one() 1/10 Function', function(){
        it('should return an object', function(){
            expect(typeof md.one('div')).to.equal('object')
        })
    })
    describe('all() 2/10 Function', function(){
        it('should return all objects', function(){
            expect(md.all('th').length).to.be.equal(5)
        })
    })

    describe('remove() 3/10 Function', function(){
        it('should remove dashboard to settings', function(){
          md.remove('.navbar-nav li')
          expect(md.one('.navbar-nav li a').innerHTML).to.equal('Settings')
        })
    }) //this one works

    describe('addClass() 4/10 Function', function(){
        it('should add a CSS class', function() {
          md.addClass('body', 'test')
          expect(document.body.classList.contains('test')).to.be.true
        })
      }) //this one helps

    describe('removeClass() 5/10 Function', function(){
        it('should remove a class', function(){
          md.removeClass('table', 'table-striped')
            expect(md.one('table').classList.contains('table-striped'))
    })
})

    describe('hasClass() 6/10 Function', function(){
        it('nav to have a class of navbar', function(){
          md.hasClass('nav', 'navbar')
            expect(md.one('nav').classList.contains('navbar')).to.be.true
        })
    })

    describe('getAttr() 7/10 Function', function(){
        it('get the attribute of img of  width', function(){
          md.getAttr('img', 'width')
          expect(md.one('img').width).to.equal(200)
        })
    })

    describe('setATTR() 8/10 Function', function(){
        it('setting the img alt attribute to seasons ', function(){
          md.setAttr("img", "alt", 'Seasons')
            expect(md.one('img').alt).to.be.equal('Seasons')
        })
    })

    describe('setHTML() 9/10 Function', function(){
        it('setting the HTML of h2 current quarter detail to winter (q4)', function(){
          md.setHTML('h2', 'h4')
        expect(md.one('h2').innerHTML).to.be.equal('h4')
        })
    })

    describe('getHTML() 10/10 Function', function(){
        it('get the dashboard', function(){
          md.getHTML('.page-header')
            expect(md.one('.page-header').innerHTML).to.equal('Dashboard')
        })
    })
})

describe('MoDom flip ', function(){
  describe('md.flipPage()', function() {
    it('should flip the page upside down', function() {
        md.flipPage('rotate(180deg)')
        expect(document.body.style.transform).to.equal('rotate(180deg)')
      })
    })
})
