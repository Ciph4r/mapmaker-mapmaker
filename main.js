function doubleAll(x) {
let newMath = []
for (let i = 0 ; x.length > i ; i++){
newMath.push(x[i] *2)
}return newMath
}

function absoluteValues(x) {
 let newarray = []
 for (let i = 0 ; x.length > i ; i++){
   newarray.push(Math.abs(x[i]))
 }return newarray
}

function yelledGreetings(x) {
  let newArray = []
  for (let i = 0 ; x.length > i ; i++){
  newArray.push(x[i]+ '!')
}return newArray
}


function changeToInitials(x) {
  let newArray = []
  for (let i = 0 ; x.length > i ; i++){
  newArray.push(x[i][0] + x[i][x[i].indexOf(' ')+1])
  }return newArray
}

function doubleOdd(x) {
  let newArray = []
  for (let i = 0 ; x.length > i ; i++){
    Math.floor(x[i])%2 !== 0 ? newArray.push(x[i] *2 ) : newArray.push(x[i])
  } return newArray
}

function upperCaseFirstLetters(x) {
  let newArray = []
  
  cap = (x) => {
    let y =''
    for (let i = 0 ; x.length > i ; i++){
      i === 0 ? y+= x[i].toUpperCase() : y+= x[i].toLowerCase()
  }return y
}
  
  for (let i = 0 ; x.length > i ; i++){
  newArray.push(cap(x[i]))
  } return newArray
}

function add1ToLeft(x) {

  let newArray = []

  
  for (let i = 0 ; x.length > i ; i++){
    Math.sign(x[i]) === 1 ? newArray.push(Number('1'+x[i])) : newArray.push(-('1'+(x[i]*-1)))
  } return newArray
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}