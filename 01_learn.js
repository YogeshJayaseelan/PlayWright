/* 
1) Javascript File Name: 01_learn.js
 
    Objective: Learn Primitive Data Types
 
    Create the following variables using var and check their typeOf
 
    a) firstName
    b) companyName
    c) mobileNumber
    d) isAutomation
    e) hasPlaywright (do not assign)
 
    print and confirm the values and data types

 */

var firstName = "Sathyavathy";
var companyName = "TCS";
var mobileNumber = 25865898459;
var isAutomation = true;
var hasPlaywright;

console.log(typeof(firstName));
console.log(typeof(companyName));
console.log(typeof(mobileNumber));
console.log(typeof(isAutomation));
console.log(typeof(hasPlaywright));

/* 
    Use same Javascript File Name: 01_learn.js
 
    Objective: Learn var vs let vs const and understand variable scoping
 
    Declare a const name as browserName (global)
    Assign value as "Chrome"
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works
 
    - function how to write and how to call
    - basic if condition and block variable
    - let vs var
    */

const browserName = "Chrome";

function getBrowserVersion()
{
    if (browserName == "Chrome")
    {
    var browserVersion = "10.11.2023";
    }
    console.log(browserVersion);
}
getBrowserVersion();
