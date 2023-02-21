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


function positiveNumFinder(num) {
    i = 0;
    prevPower = 0;
    notFound = true;
    
    while (notFound)
    {
        power = 2 ** i;
        if (power >= num)
        {
            notFound = false; 
            positivegap = power - num;
            negativegap = num - prevPower;
            if (positivegap > negativegap){
                console.log(`The number ${prevPower} is the power of 2 nearest to ${num}`)
            }
            else
            {
                console.log(`The number ${power} is the power of 2 nearest to ${num}`)
            }
            
        }
        i++;
        prevPower = power;
    }
}
 
positiveNumFinder(63);
positiveNumFinder(40);

// console.log( 2 ** 3)

// let positiveNumber = 40
// let power = 0 // 32 and 64 // negativeGap = 8 positiveGap= 24
// let prevpower = 0

// for (let index = 1; index < positiveNumber; index ++) {
//     if (power < positiveNumber){
//         power = 2 ** index
//         prevpower = 2 ** (index-1)
//         positiveGap = power - positiveNumber
//         negativeGap = positiveNumber - power
//         if (positiveGap > negativeGap) {
//             console.log("The number " + prevpower + " is the power of 2 to the nearest " + positiveNumber)
//         } else {
//             console.log("The number " + power + " is the power of 2 to the nearest " + positiveNumber)

//         }
//     }
    
// }

// let z = 5
// let b = 3
// console.log(z | b)

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

// Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
// “The number (pwr) is the power of 2 nearest to (num).”

// If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

// For example,
// If num = 40, pwr = 32. Then you log to your console in this format:
// “The number 32 is the power of 2 nearest to 40.”

// If num = 50, pwr = 64.. Then you log to your console in this format: // 2^5 =32 & 2^6 =64 64-50= 14  50-32=18
// “The number 64 is the power of 2 nearest to 50.”

// let num = 40
//let positiveGap = power - num // 10 //16 = 16-10 = 6
//let negativeGap = num - power //8// 10 -8 = 2 
// function takePositiveNumber(num){
//     let power = 0;         // 40 = 2^1 ... 2^5. stops = Let power = 0
//     for (let index = 1; index <= num; index++) {
//         power = 2 ** (index)
//         if (power === num) {
//             beforeNum = power * 2 ** -1;
//             afterNum = power * 2;
//             let positiveGap = afterNum - power ; // num = 10 16 = 16 // power = 2 ^4 *2 ( index-1) 2 ^3 or 2^5
//             let negativeGap = power - beforeNum;
//             if( positiveGap < negativeGap){
//                 console.log(afterNum);
//             } else if (negativeGap <= positiveGap){
//                 console.log(beforeNum);
//             } break;
//         } 
//         else {
//             console.log("Number is zero or a decimal");

//         }
            
         
        
//     }
// }
// console.log(takePositiveNumber(66));

// let multiplier = 2
// function takePositiveNumber(num){
//     for (let i= 0 ; i < num; i++) {
//         let power = 0;
//         power = multiplier ** i
//         if (power === num){
//            console.log("The number " + power + " is the power of 2 to the nearest " + num);
//                 else if (power <= num){
//             prevPower= power/2;
//             afterPower = power * 2;
//             beforeNum = num - power 
//             afterNum = power - num
//             if(beforeNum < afterNum){
//                 console.log("The number " + power + " is the power of 2 to the nearest " + num )
           
//         } 

//             } else {
//                 console.log("The number " + afterPower + " is the power of 2 to the nearest " + num )

//             }
//          } else if (power >= num){
//                 prevPower= power/2;
//                 afterPower = power*2;
//                 beforeNum = num - power 
//                 afterNum = power - num
//                 if(beforeNum < afterNum){
//                 console.log("The number " + prevPower + " is the power of 2 to the nearest " + num )
//             } else if (afterNum < beforeNum){
//                 console.log("The number " + afterPower + " is the power of 2 to the nearest " + num ) 
//             }

//         }
        
//     }
// }

// console.log(takePositiveNumber(40));
