// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

(function() {
    'use strict'
    //one(): Find one matching element using any CSS selector
    var one = function(selector) {
        return document.querySelector(selector)
    }

    //all(): Find all matching elements using any CSS selector
    var all = function(selectors) {
        return document.querySelectorAll(selectors)
    }

    //remove(): Remove an element
    var remove = function(selector) {
         return one(selector).remove()
    }

    //addClass(): Add a CSS class to an element
    var addClass = function (selector, className) {
            one(selector).classList.add(className)
    }

    //removeClass(): Remove a CSS class from an element
    var removeClass = function(selector, className){
        return one(selector).classList.remove(className)
    }

    //Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
    var hasClass = function(selector, className){
        return one(selector).classList.contains(className)
    }

    //getAttr(): Get an HTML attribute from an element
    var getAttr = function(selector, attribute){
        return one(selector).getAttribute(attribute)
    }

    //setAttr(): Set an HTML attribute on an element
    var setAttr = function(selector, attribute, value){
        return one(selector).setAttribute(attribute, value)
    }

    //setHTML(): Set the innerHTML of an element
    var setHTML = function(selector, value) {
         one(selector).innerHTML = value
    }

    //getHTML(): Get the innerHTML of an element
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
     var setValue = function(selector, value){
         one(selector).value = value
    }
    // Add an addEvent() function that adds an event listener and callback function to an element.
    // Add a removeEvent() function that removes an event listener and callback function from an element.
    // Add a clone() function that makes an exact copy of the original element (see Object.create() documentation).
    // Add an true/false option to the all() function to return an Array.
    // Add a getStyle() function to get the computed style properties of an element.
    // Add a setStyle() function to set the style of an element.

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
        setValue: setValue,
    }
}())
// remove, addclass, remove class, has class, get attribute, set attribute, set html, get html
