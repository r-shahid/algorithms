// /**
//  * @param {int[], int} // an array of nums, target value
//  * @return {int[]} // an array of nums that add up to target value
//  */
// let twoSum = (arr) => {
// 	return complimentArr;
// };


////NESTED FOR LOOP
//complexity is O(N^2)
// what do we know?
// we have one array
// they're all positive numbers
// the prompt asks to add two of them => to reach target number

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2];

// a for loop is in our basic tool kit
// the for loop will go over the entire array once.
// for each number, we need to do another loop over the array.
// Inside the additional loop we need to check if the numbers add to our target.
// If they add up to our target we need to return that pair.

const twoSum = (target) => {
	for (i = 0; i <= numsArr.length; i++) {
		let int = [];
        for(j = 0; j<= numsArr.length; j++){
            if (numsArr[i] + numsArr[j] == target) {
			int.push(numsArr[i]);
            int.push(numsArr[j]);
            return console.log(int)
		    }
        }
		//console.log(int); BY CONSOLE LOGGING HERE, THE FUNCTION KEEPS LOOKING FOR OTHER RESULTS. WE ONLY WANT ONE, SO I COMMENTED THIS OUT AND PUT THE RETURN STATEMENT ABOVE, THANKS TO SAMPREET'S SUGGESTION   
	}
};
twoSum(5);

//pseudocode for loop + indexOf()
// a for loop to traverse the array
// find the difference between current value and target
    // if indexOf compliment .. then store this value
// return compliments 
const twoSumIndex = (target) => {
    let int =[]
    for (i=0; i<= numsArr.length; i++){
        let diff = (target - numsArr[i])
        // console.log(diff)
        let index = numsArr.indexOf(diff)
        // console.log(index)
        int.push(numsArr[i], numsArr[index])
        return console.log(int)
    }
}
// twoSumIndex(9)

// pseudocode forEach + includes
// forEach loop over the array. 
// difference between currentValue and target to get compliment
    // .includes compliment?
        // push currentValue and compliment

const twoSumEach = (target) => {
    let int =[]
    numsArr.forEach( (i) => {
        // console.log(i)
        let compliment = target - i
        // console.log(compliment)
        let complimentIndex = numsArr.indexOf(compliment)
        // console.log(complimentIndex)
        // numsArr.includes(compliment) ? int.push(i, numsArr[complimentIndex]) : console.log('trying again')
        if (numsArr.includes(compliment)){
            int.push(i, numsArr[complimentIndex])
            return console.log(int);
        }
    }
    )
}
// I'm getting all matching pairs, not sure how to get just one
// twoSumEach(9)

//pseudocode for loop + Object
// initialize empty complimentObj
/// initialize empty complimentArr
// for loop to go over the array
    // get compliment
    // if complimentsObj has this compliment.. 
        // push value and compliment into complimentsArr
    // otherwise.. set complimentsObj[val] = i 
// return complimentsArr

let compObj = {}
let compArr = []
