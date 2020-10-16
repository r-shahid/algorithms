// /**
//  * @param {int[], int} // an array of nums, target value
//  * @return {int[]} // an array of nums that add up to target value
//  */
// let twoSum = (arr) => {
// 	return complimentArr;
// };

// // TEST Arr
// const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2];

// // TEST TARGET
// // => 9

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
		//console.log(int);
	}
};
twoSum(5);

// Inside the additional loop we need to check if the numbers add to our target.
// If they add up to our target we need to return that pair.
