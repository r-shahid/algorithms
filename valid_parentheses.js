// const checkValid = (arr) => {
//     const array = []

//     for (i = 0; i < arr.length; i++){
//         let current = arr[i]

//         if (current == '('){
//             //array.push(')')
//             if((arr[i+1] == ')')|| arr.pop == ')'){
//             console.log(true)
//             } else {console.log(false)}
//         }
//         if (current == '['){
//             //array.push(')')
//             if((arr[i+1] == ']')|| arr.pop == ']'){
//             console.log(true)
//             } else {console.log(false)}
//         }
//         if (current == '{'){
//             //array.push(')')
//             if((arr[i+1] == '}')|| arr.pop == '}'){
//             console.log(true)
//             } else {console.log(false)}
//         }
//         // if (current == '['){
//         //     array.push(']')
//         // }
//         // if (current == '{') {
// 		//     array.push('}');
//         // }
//         // else {
//         //     const first = array.pop()
//         //     if (current !== first){
//         //         console.log(false)
//         //     }
//         // }
//     }
//     //console.log(array.length === 0)
//     // console.log('this is array', array)
// }

// checkValid(['{','(',')','}'])


let isValid = (inputStr) => {
    const arr = []
    const pairs = {
        '}':'{',
        ']':'[',
        ')':'('
    }
    for (let char of inputStr) {
        let open = pairs[char]
        console.log(open)
        if (open) {
            if (arr.pop() !== open) {
                return false
            }
        } else {
            arr.push(char)
        }
    }
    return arr.length <= 0;
}

isValid('{}[]()')