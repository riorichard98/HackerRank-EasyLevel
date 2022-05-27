function maxCost(cost, labels, dailyCount) {
  // Write your code here
  let legalCount = 0
  let output = 0
  let costCount = 0

  for(let i = 0 ; i < labels.length ; i++){
    costCount += cost[i]
    if(labels[i] === 'legal'){
      legalCount++
    }
    if(legalCount === dailyCount && costCount > output){
      output = costCount
    }
    if(legalCount === dailyCount){
      costCount = 0
    }
  }
  return output
}

console.log(maxCost([5,0,3,2,3,4,5],['legal','legal','illegal','legal','legal'],1));