// Example.....
// function encode(phrase){
//     var result = "";
//     // .. for each character in phrase
//     for(var i = 0; i < phrase.length; i++){
//         // get the charCode if letter at index i
//         var cc = phrase[i].charCodeAt(0);
//         // add 13 to the letter's charCode
//         result += String.fromCharCode(cc+13);

//     }
//     return result;
// }

// console.log(encode("hello")); //---> "uryyb"

// function decode(phrase){
//  var result = "";
//  for(var i = 0; i < phrase.length; i++){
//         // get the charCode if letter at index i
//         var cc = phrase[i].charCodeAt(0);
//         // add 13 to the letter's charCode
//         result += String.fromCharCode(cc-13);

//     }
//     return result;
// }

// console.log(decode("uryyb")); //---> "hello"

// //Practice....

function encode(phrase) {
    var result = "";
    // .. for each character in phrase
    for (var i = 0; i < phrase.length; i++) {
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);

        // add 13 to the letter's charCode
        if ((cc + 13) > 122) {
            cc2 = (cc + 13) - 26
            result += String.fromCharCode(cc2);
        } else {
            result += String.fromCharCode(cc + 13);
        }
    }
    return result;
}

// console.log(encode("hello")); //---> "uryyb"

function decode(phrase) {
    var result = "";
    for (var i = 0; i < phrase.length; i++) {
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);
        // add 13 to the letter's charCode

        if ((cc - 13) < 97) {
            cc2 = (cc - 13) + 26
            result += String.fromCharCode(cc2);
        } else {
            result += String.fromCharCode(cc - 13);
        }


    }
    return result;
}

// console.log(decode("uryyb")); //---> "hello"


/// test it

console.assert( decode(encode("hello")) === "hello" );

/////////////////////////ROTX////////////////

function encode2(phrase, x) {
    var result = "";
    // .. for each character in phrase
    for (var i = 0; i < phrase.length; i++) {
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);

        // add x to the letter's charCode
        if ((cc + x ) > 122) {
            cc = (cc + x) - 26
            result += String.fromCharCode(cc);
        } else {
            result += String.fromCharCode(cc + x);
        }
    }
    return result;
}

console.log(encode2('hello' , 13))
// console.log(encode2('abcdefghijklmnopqrstuvwxyz' , 55))

function decode2(phrase, x) {
    var result = "";
    for (var i = 0; i < phrase.length; i++) {
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);
        // add 13 to the letter's charCode

        if ((cc - x) < 97) {
            cc = (cc - x) + 26
            result += String.fromCharCode(cc);
        } else {
            result += String.fromCharCode(cc - x);
        }


    }
    return result;
}

console.log(decode2("uryyb" , 13))