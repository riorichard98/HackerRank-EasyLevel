function stringAnagram(dictionary, query) {
  // Write your code here
  let output = []
  for(let i = 0 ; i < query.length ; i++){
    let count = 0
    let obj = {}
    for (let k = 0; k < query[i].length; k++) {
      obj[query[i][k]] = true
    }
    for(let j = 0 ; j < dictionary.length ; j++){
      let anagram = true
      for(let l = 0 ; l < dictionary[j].length ; l++){
        if(!obj[dictionary[j][l]]){
          anagram = false
          break
        }
      }
      if(anagram && query[i].length === dictionary[j].length){
        count++
      }
    }
    output.push(count)
  }
  return output
}

console.log(stringAnagram(['hack','a','rank','khac','ackh','kran','rankhacker','a','ab','ba','stairs','raits'],['a','nark','bs','hack','stair']));


