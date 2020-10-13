// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!

console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return `${word}s`;
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let arr = [];
    forEach(array, () => {
        arr.push(callback(element))
    });
    return arr;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        callback(element)
    }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let arr = [];
    forEach(array, (elm) => {
        arr.push(callback(element))
    });
    return arr;
}

//Extension 2
function reduce(array, callback, initialValue) {
    let acc = initialValue;
    for(let element of array) {
        acc = callback(acc, element)
    }
    return acc;
}

//Extension 3
function intersection() {
    let array = [...arguments].map((elm) => [...new Set(elm)]);
    return array.reduce((acc, cv) => {
        acc = acc.filter((elm) => {
            return cv.includes(elm)
        });
        return acc
    });
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
    return arrays.reduce((acc, cv) => {
        acc.forEach((elm) => {
            if (cv.includes(elm)) {
                cv.splice(cv.indexOf(elm), 1);
            }
        });
        
        return acc.concat(cv);
    });
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    return array1.reduce((acc, cv, i) => {
        if(callback(cv) === array2[i]) {
            acc[cv] = array2[i];
        }
        return acc
    }, {})
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.reduce((acc, cv) => {
        acc[cv] = arrCallbacks.map(fn => fn(cv))
    }, {})
}

console.log(
    multiMap(
        ['catfood', 'glue', 'beer'], 
        [
            function(str) { 
            return str.toUpperCase(); 
            }, 
            function(str) { 
                return str[0].toUpperCase() + str.slice(1).toLowerCase(); 
            }, 
            function(str) {
                return str + str; 
            }
        ]
    )
);

// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
