function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesCounter = 0
    let orangesCounter = 0
    for(let i = 0 ; i < apples.length ; i++){
        if(apples[i] + a >= s && apples[i] + a <= t){
            applesCounter++
        }
    }
    for(let i = 0 ; i < oranges.length ; i++){
        if(oranges[i] + b >= s && oranges[i] + b <= t){
            orangesCounter++
        }
    }
    console.log(applesCounter)
    console.log(orangesCounter)
}