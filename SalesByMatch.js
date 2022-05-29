function sockMerchant(n, ar) {
    // Write your code here
    let output = 0
    for (let i = 0; i < ar.length; i++) {
        for (let j = i+1; j < ar.length; j++) {
            if(ar[j] === ar[i]){
                output++
                ar.splice(j,1)
                break
            }
        }
    }
    return output
}

