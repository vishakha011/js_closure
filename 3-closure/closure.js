function nonsense(string) {
    var blab = function(){
        alert(string);
    };
    blab();
}

// ------------------------//

function nonsense(string) {
    var blab = function(){
        alert(string);
    };
    setTimeout(blab, 2000);
}

// ----------------------------//

function nonsense(string) {
    var blab = function(){
        alert(string);
    };
    return blab;
}

let blabLater = nonsense("First string");
let blabAgainLater = nonsense("Second string");

// -------------------------------//

var lastNameTrier = function(firstName){
    var innerFunction = function(lastName) {
        console.log(`${firstName} ${lastName}`);
    };
    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'

// ------------------------------------//