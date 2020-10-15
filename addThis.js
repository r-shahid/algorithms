// take a string of numbers
// separate the digits
// add the digits
// if the number is greater than 10, call the function again

var number = 123,
    output = [],
    numbers = number.toString()

const getNums = (numbers) => {
    for (let i = 0; i<numbers.length;i++){
        output.push(numbers.charAt(i))
    }
    addNums(output)
}

const addNums = (arr) =>{
   // let total =[]
    var sum = 0

    for (var i = 0; i < arr.length+1; i++);{
       sum += parseInt(arr[i])
       //total.push(sum)
    }
    console.log(sum)
    //console.log('total', total);

}

getNums(numbers)
console.log(output)