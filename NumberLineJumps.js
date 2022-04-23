function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let found = false
    for(let i = 0 ; i < 10000 ; i++){
        if((x1+ v1*(i+1))===(x2 + v2*(i+1))){
            found = true
            return 'YES'
        }
    }
    if(!found){
        return 'NO'
    }
}