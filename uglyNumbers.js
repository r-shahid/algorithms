// let isUgly = function(num) {
//     if (num %2 == 0 ){
//         if (num % 3 == 0) {
//             if (num % 5 == 0) {
//                 console.log(`true`)
//             }
//             // else {console.log(`true`);}
//         }
//     } else{
//         console.log(`false`)
//     }
// }

// const isUgly = (num) => {
//     if (num ==1){
//         console.log(`${num} true`)
//     }
//     if( num >1){
//         if (num % 2 == 0) {
// 		    if (num % 3 == 0) {
// 			    if (num % 5 == 0) {
// 				console.log(`${num} true`);
// 			} else {
// 				console.log(`${num} true`);
// 			}
// 		} else {
// 			console.log(`${num} true`);
// 		}
// 	    } else {
// 		    console.log(`${num} false`);
//         }
        
//     }
	
// };

// isUgly(1);
// isUgly(2);
// isUgly(3);
// isUgly(4);
// isUgly(5);
// isUgly(6);

// for (let i = 1; i <5; i++){
//     console.log(`num: ${i}`, isUgly(i))
// }


// let isUgly = function(num) {
//     let intg = (num)
//     if (intg ===1){return true}
//     if (intg %2 === 0) {
//         let numero = (intg/2)
//         if (numero >1) {
//             isUgly(numero)
//         } else{return true}
//     }
//     if (intg % 3 === 0) {
// 			let numero = intg / 3;
// 			if (numero > 1) {
// 				isUgly(numero);
// 			} else {
// 				return true;
// 			}
// 		} else {
// 			return false;
// 		}
// }

// for(let i = 1; i < 9; i += 1) {
//   console.log(`num: ${i}`, isUgly(i))
// }

const isUgly = (num) => {

    let primeArr = [2,3,5]

    primeArr.forEach((prime) => {
        while (num && num%prime ===0){
            num /= prime
            // return true
        }
    })
    return num === 1
}

//check
for (let i = 1; i <= 30; i++){
    console.log(`num: ${i}`, isUgly(i))
}