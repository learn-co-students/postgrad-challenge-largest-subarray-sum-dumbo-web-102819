const largestSubarraySum = (arr) => {
     let largest = 0
     let result = 0

     for(let i = 0; i < arr.length; i++){ 
        result = Math.max(0, (result + arr[i]))
        largest = Math.max(largest, result)
     }

    return largest
}