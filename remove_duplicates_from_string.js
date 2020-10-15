/**
 * @param str
 * @returns {string}
 */
function removePairDuplicate(str) {
    // str = str.toLowerCase()
    let arr= []
    for (let i=0; i<str.length-1; i++){
        // let char = str[i];
        
        // if(str[i] !== str[i+1] ){
        //     // console.log(str[i])
        //     arr.push(str[i])
        // 
       
        if (str[i] !== str[i+1].toLowerCase()){
            if (str[i] !== str[i + 1].toUpperCase){
                 arr.push(str[i]);
            }
        } //add that if the if statemnt is false, i = i+2
    }
    console.log(arr.join(""))
}

console.log(removePairDuplicate('abcCkDdppGGa'));
// console.log(removePairDuplicate('jHYti'));
