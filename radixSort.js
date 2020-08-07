// RADIX SORT !


// 3 HELPER FUNCTIONS...
// // HELPER function 1: 
// find value of given idx, except counting backwards (idx[arr.length-1] to arr[0])
// function findDigit(str, idx) {
//     let arr = str.split("");
//     let hash = {};
//     for(let i=arr.length-1; i>=0; i--) {
//         let num = arr.length; 
//         hash[i] = num - i; 
//     }
//     // console.log(hash);
//     let location = hash[idx];
//     let res = arr[location -1];
//     console.log("AT INDEX", idx, "value is", res);
// }
// findDigit("12340239841", 0);
// findDigit("12340239841", 10);
// findDigit("12340239841", 3);
// findDigit("12340239841", 5);
// // equivalent but, mathematical approach: 
function getDigit(num, i) {
    // console.log(Math.floor(Math.abs(num) / Math.pow(10, i)) % 10);
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;    
}
// getDigit(1234, 0);
// getDigit(43569, 3);
// getDigit(33, 1);


// // HELPER function 2: 
// to count max number of digits which determines how many times to 'radix sort'
// function countDigits(num) {
//     let str = num.toString();
//     let total = str.length;
//     console.log(total);
//     // return str.length; 
// }
// countDigits(123);
// countDigits(983421);
// countDigits(43);
// // // equivalent but, mathematical approach:
function digitCount(num) {
    if(num === 0) return 1; 
    // console.log(Math.floor(Math.log10(Math.abs(num)) + 1));
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}
// digitCount(54321);
// digitCount(889);
// digitCount(62);

// // HELPER function 3: 
// to determine how many digits the largest number has, using helper 2! (NOT which number has the most digits, but implementing helper 2 on an array of nums)
function mostDigits(arr) {
    let max = 0;
    for(let i=0; i<arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]))
    }
    console.log(max);
    // return max;
}
mostDigits([12, 2323, 43, 5, 98]);
mostDigits([43, 122, 780284, 93712]);
mostDigits([89, 2, 43]);

// FINALLY, Implement RADIX SORT:
// 1. determine number of digits of largest num (using helper 2)
// 2. previous determines how many times to loop through array
// 3. for each iteration, we can call 'k=0' up to largest number of digits, create a 'bucket' for each digit from 0 to 9 (so, k = 0 to k = largest num of digits; for ex, if the largest num has 5 digits, we do the iteration 5 times)
// 4. each 'bucket' will just be an empty array with 10 (also empty) sub-arrays (so, idx 0 of array will be one empty subarray, idx 1,... 10)
// 5. each time through this loop, we will take each number and put it in the correct 'bucket' based off of its 'kth' digit
function radixSort(nums_arr) {
    let maxDigitCount = mostDigits(nums_arr);
    // iterate until number of digits of max value is reached:
    for(let k=0; k<maxDigitCount; k++) {
        // create 10 empty subarrays: 
        let digitBuckets = Array.from({length: 10}, () => []);
        // now we look at every digit of each value:
        for(let i=0; i<nums_arr.length; i++) {
            let digit = getDigit(nums_arr[i], k); 
            // and 'k' will increase so that we evaluate every digit of each num
            digitBuckets[digit].push(nums_arr[i]);
        }
        // now combine the 'buckets' together:  
        nums_arr.concat(...digitBuckets);
    }
    return nums_arr;
}