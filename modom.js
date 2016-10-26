// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

(function() {
    'use strict'
    //1/10one(): Find one matching element using any CSS selector
    //
    var one = function(selector) {
        return document.querySelector(selector)
    }

    //2/10all(): Find all matching elements using any CSS selector
    var all = function(selectors) {
        return document.querySelectorAll(selectors)
    }

    //3/10remove(): Remove an element
    var remove = function(selector) {
         return one(selector).remove()
    }

    //4/10addClass(): Add a CSS class to an element
    var addClass = function (selector, className) {
            one(selector).classList.add(className)
    }

    //5/10removeClass(): Remove a CSS class from an element
    var removeClass = function(selector, className){
        return one(selector).classList.remove(className)
    }

    //6/10Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
    var hasClass = function(selector, className){
        return one(selector).classList.contains(className)
    }

    //7/10getAttr(): Get an HTML attribute from an element
    var getAttr = function(selector, attribute){
        return one(selector).getAttribute(attribute)
    }

    //8/10setAttr(): Set an HTML attribute on an element
    var setAttr = function(selector, attribute, value){
        return one(selector).setAttribute(attribute, value)
    }

    //9/10setHTML(): Set the innerHTML of an element
    var setHTML = function(selector, value) {
         one(selector).innerHTML = value
    }

    //10/10getHTML(): Get the innerHTML of an element
    var getHTML = function(selector){
        return one(selector).innerHTML
    }

    //Add an ajax() function that fetches API data.
    var ajax = function(url, successCallback) {
        fetch(url)
        .then(res => res.json())
        .then(successCallback)
    } ///give a callback function to run this block of code

     //Add a getProp() function that gets an element's object property value.
    var getProp = function(selector, property){
        return one(selector)[property]
    }   //we get back a object.can't use .property after the selector because it literally looks for .property not the vaulue of property.

     //Add a setProp() function that sets an element's object property value.
     var setProp = function(selector, property, value){
        one(selector)[property] = value
    }   /// prop is all the metadata about the tag.

     //Add a getValue() function that sets an form field's value attribute.
     var getValue = function(selector){
        return one(selector).value
    }  //use in form fields
     //Add a setValue() function that sets an form field's value attribute.
     ////class exercise
    //  var setValue = function(selector, value){
    //      one(selector).value = value
    // }



    // var add = function(value1, value2) {
    //     var total = value1+ value2
    //     return total
    // }
//or
    // var add = function() {
    //     var numbers = Array.from(arguments)
    //
    //     var total = numbers.reduce(function(previousNumber, currentNumber){
    //         return previousNumber + currentNumber
    //     }, 0)
    //     return total
    // }
    var flipPage = function(degree){
        return document.body.style.transform = degree
    }

    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
        ajax: ajax,
        getProp: getProp,
        setProp: setProp,
        getValue: getValue,
        flipPage: flipPage,
    }
}())
// remove, addclass, remove class, has class, get attribute, set attribute, set html, get html
