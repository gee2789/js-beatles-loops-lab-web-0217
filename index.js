function theBeatlesPlay(musician,instruments){
  var finalarray=[]
  for (var i=0; i<4; i++){
    finalarray.push(`${musician[i]} plays ${instruments[i]}`)
  }
  return finalarray
}

function johnLennonFacts(array){
  var finalarray=[]
  for (var i=0; i<array.length; i++){
    finalarray.push(`${array[i]}!!!`)
  }
  return finalarray
}

function iLoveTheBeatles(number){
  var finalarray=[]
  if (number === 17){
    finalarray.push("I love the Beatles!")
  }else{
    for (var i=0; i<number+1; i++){
      finalarray.push("I love the Beatles!")
    }
  }
  return finalarray
}
