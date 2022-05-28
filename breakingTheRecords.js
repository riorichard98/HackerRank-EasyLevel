function breakingRecords(scores) {
    // Write your code here
    let output = [0, 0]
    let biggestScore = scores[0]
    let leastScore = scores[0]
    for (let i = 1; i < scores.length; i++) {
        if(scores[i] > biggestScore){
            biggestScore = scores[i]
            output[0] = output[0]+1
        }else if(scores[i] < leastScore){
            leastScore = scores[i]
            output[1] = output[1]+1
        }
    }
    return output
}

console.log(breakingRecords([10,5,20,20,4,5,2,25,1])); // [2,4]
console.log(breakingRecords([3,4,21,36,10,28,35,5,24,42])); // [4,0]