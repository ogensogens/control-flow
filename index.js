let x = 2
let y = 3
console.log("let sum of x and y equals", x += y)

let studentGroup = "ART"
let scienceSubjects = " Physics, Chemistry, Biology, Technical Drawing"
let socialScienceSubjects = " Accounting, Commerce, Marketing, Geography"
let artsSubjects = " Government, Economics, Literature, History"
let generalSubjects = "English, Mathematics"


if (studentGroup === "ART"){
    console.log( "You will be taking " + generalSubjects + "," + artsSubjects)
} else if ( studentGroup === "SCIENCE"){
    console.log("You will be taking " + generalSubjects + "," + scienceSubjects )
} else if ( studentGroup === "SOCIALSCIENCE") {
    console.log("You will be taking " + generalSubjects + "," + socialScienceSubjects)
} else {
    console.log("Student group is Invalid")
}

for (let i = 1 ; i < 20; i += 7) {
    console.log(i) // result 1 8 15
}

// console.log( 2 ** 3)

let positiveNumber = 63
let power = 0 // 32 and 64 // negativeGap = 8 positiveGap= 24
let prevpower = 0

for (let index = 1; index < positiveNumber; index ++) {
    if (power < positiveNumber){
        power = 2 ** index
        prevpower = 2 ** (index-1)
        positiveGap = power - positiveNumber
        negativeGap = positiveNumber - power
        if (positiveGap > negativeGap) {
            console.log("The number " + prevpower + " is the power of 2 to the nearest " + positiveNumber)
        } else {
            console.log("The number " + power + " is the power of 2 to the nearest " + positiveNumber)

        }
    }
    
}

// power = power + index **2
// do {
//     power= posi
// } while (condition);


// // if( positiveNumber > 0 ){
// //     power = positiveNumber ** 2 
// //     console.log( "The number " + power + " is the power of 2 to the nearest " + positiveNumber)

// // } 

// // // else if ( positiveInteger > 0){
// // //     power = positiveInteger ** 2
// // // } else {

// // // }

// if positiveNum = 40
// 2 ** 1 > num, if no, continue
// 2 ** 2 > num, if no, continue
// 2 ** 5 > num. if no contine
// 2 ** 6 > num, if yes stop


