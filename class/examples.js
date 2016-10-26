// console.log(dog)
//
// var imporovedWord = dog.capitalizeFirst('bark')
// console.log(imporovedWord)
// // got an uppercase first.  Bark in console log.
// console.log(dog.pad('1', '0',2) )
// console.log(dog.pad('1', '0', 3) )
//
//console.log(dog.one('h1'))
//
// console.log(dog.pad('1'))// =>01 is undefined. no character.
// Your test code examples go here. Make sure you console.log() results.

console.log(md.one('div'))
console.log(md.all('th'))
console.log(md.remove('li'))
console.log(md.addClass('h2', 'danger'))
console.log(md.removeClass('h4', 'text-muted'))
console.log(md.hasClass('span', 'text-muted'))
console.log(md.getAttr('src', 'height'))
console.log(md.setAttr('img', 'alt', 'Seasons'))
console.log(md.setHTML('td', '4,000'))
console.log(md.getHTML('h4'))
md.ajax('http://swapi.co/api', function(data){console.log(data)})
// //can call the data whatever we want
