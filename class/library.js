// funciton setTimeout() {
//
// }
// //cannot do this.  already have this function when making a library

// (function() {
//     'use strict'
// }())
// //IIFE code. immediately involking function expression.  after you make a function.  it calls itself.  then we wrap the whole function and outputs into the code.  when you use 'use strict'  adds a bunch of stricter error message.

(function() {
    'use strict'
    var capitalizeFirst = function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1)
    }
    var capitalizeAll = function(words) {
        return words.split(' ').map(capitalizeFirst).join(' ')
    }//words is a string data and split it in spaces.to a an array.  then map will produce another array with the capitalizeFIRirst.  the join is turning into a string.

// //wor, length i want to be
//     var padLeft = function(word, char, length) {
//         char = char || '0'// falso or 0. saying which one is true
//         length = length || '2'//redefine our char variable
//         //defaults setup
//         //padleft('1', '0', 2) => 01
//         // padleft('1', '0', 3) => 001
//         return char.repeat(length-word.length) + word
// }//taking word, char and length. repeat this by the length of things we want minus....


//use this way.
    var padLeft = function(word, char = '0', length = 2) {
        char = char || '0'
        length = length || '2'
        return char.repeat(length-word.length) + word
    } // use default arguments instead of lines 22 and 23

    var one = function(selector) {
        return document.querySelector(selector)
    }


    window.dog = {
        capitalizeFirst: capitalizeFirst,
        capitalizeAll: capitalizeAll,
        pad: padLeft,
        one: one,
        makeItRed: function() {
            document.body.style.backgroundColor = 'red'
        },
        //green is global names, red is function.  we get to call the red letters
    }
}())



















// block 1
// function driveCar() {
//
// }
// ///callback is a declared variables that we made to call the function of line 12 and 13. driveCar has the function... goes into 5.  and we called that anoumous function callback and called it callback() to run.  then it goes to line 7.  nothing.  then line 8 and returns the string ivalue
// var driveCar = function(callback) {
//     callback()
//
//     return function () {
//         alert('Hello from your car')
//     }
// }
//
// var greeting = driveCar (function () {
// alert('zoom')
// })
//
// greeting()
//~~~~~~~~~

// //block 2
// // this is showing that when you console log the callback it shouws the function of 19 + 20
// //the callback()) shows the  function and runs the code to return zoom
// var driveCar = function(callback) {
//     console.log(callback)
//     console.log(callback())
//
//     return function () {
//         //alert('Hello from your car')
//     }
// }
//
// var greeting = driveCar (function () {
// return ('zoom')
// })
//
// greeting()
// //~~~~~
//
//
// var driveCar = function(doStuff, secretMessage) {
//     //console.log(callback)
//     //console.log(callback())
//     var stuffMessage = doStuff()
//     alert(stuffMessage)
//     return function () {
//         return 'Hello from your car' + stuffMessage
//     }
// }
// // so after the return..
// // returning the function as a value is a closure.
// var greeting = driveCar (function () {
// return 'zoom'
// })
//
// console.log(greeting())//return string of msg from your car.  doesn't put on screen. we have to tell it to do something with that.
//
// var msg=greeting()
// document.body.innerHTML = greeting()//taking the value and putting it on  your page.
//~~~~~


// //block 3
// //nest function inside of function
// function makeFood() {
//     var lettuce = true
//
//     function makeTacos() {
//         var cheese = true
//         console.log(lettuce)
//     }
//
// console.log(cheese)//can't get into the cheese. cheese is scoped inside the makeTacos
//
// }// let is scoped to squirly bracklets. let is used inside for loops.   var is scoped to inside functions


//~~~~~~~

// //block 4.... using arrows.
// var driveCar = function(callback) {
//     console.log(callback)
//     console.log(callback())
//
//     return function () {
//         //alert('Hello from your car')
//     }
// }
//
// var greeting = driveCar(() => 'Zoom') //shorten this way.  return is implied.
//
// greeting()
// //~~~~~
//
//
// var driveCar = function(doStuff, secretMessage) {
//     //console.log(callback)
//     //console.log(callback())
//     var stuffMessage = doStuff()
//     alert(stuffMessage)
//     return function () {
//         return 'Hello from your car' + stuffMessage
//     }
// }
//
// var greeting = driveCar (function () {
// return 'zoom'
// })
//
// console.log(greeting())
// var msg=greeting()
// document.body.innerHTML = greeting()
//~~~~~
