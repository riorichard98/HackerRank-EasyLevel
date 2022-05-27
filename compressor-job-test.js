const compressor = (str) =>{
  let output = [str[0]]
  let temp = str[0]
  let count = 0
  for(let i = 0 ; i < str.length ; i++){
    if(str[i] !== temp){
      temp = str[i]
      if(count !== 1){
        output.push(count)
      }
      count = 0
      output.push(str[i])
    }
    count++
    if(i === str.length - 1 && count !== 1){
      output.push(count)
    }
  }
  return output.join('')
}

console.log(compressor('aaabbbbcdddd'));