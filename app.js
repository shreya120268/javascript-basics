//const myname= "Shreya"
//let num=5

//console.log(myname)
//console.log(num)

//num=10
//console.log(num)

//let mynumber;
//console.log(mynumber)

//let boolvalue=true
//let nullvalue=null

//console.log(boolvalue)
//console.log(nullvalue)

//  Array

//let arr = [1, 20, "John", "good"]
// console.log(arr)

//let intergerArray = [2, 5, 7, 9, 11] 

//console.log(intergerArray.length)
//console.log(intergerArray[0])
//console.log(intergerArray[1])
//console.log(intergerArray[intergerArray.length-1])

// Object

//const person = {
//    name: {
//      firstName: "John",
//      secondName: "Doe"
//    },
//    age: 25,
//    place: "London"
//  }
  
  // console.log(person)
  
  
//  const student = {
//    name: "Shreya",
//    age: 25,
//    courses: [
//      {
//        courseName: "JS",
//        courseCredits: 3
//      },
//      {
//        courseName: "MERN",
//        courseCredits: 4
//      }
//    ]
//  }
  
// console.log(student.courses)
//  console.log(student.courses[0])
//  console.log(student.courses[1].courseName)

  // template strings
//  let myNewname="Shreya1"

//  console.log(`Hello,${myNewname}!`)

  //Using prompt

//  const username= prompt("Enter username: ")
//  alert(`hello,${username}!`)
  // using aithmetic operations

//  let a=7
//  let b=3
//  console.log(a+b)
//  console.log(a-b)
//  console.log(a*b)
//  console.log(a/b)
//  console.log(a%b)
//  a++
//  console.log(a)
//  b--
//  console.log(b)

  // operations
//  console.log(3>4)
//  console.log(3<4)
//  console.log(3>=4)
//  console.log(3>=3)
//  console.log(3=='3')
//  console.log(3==='3')

  // conditions
//  let weatherCondition="Sunny"
//  let subcondition="Too Hot"

//  if (weatherCondition="Cloudy"){
//    console.log("Take an umbrella")
//  }
//  else if (weatherCondition="Rainy"){
//    console.log("Use an umbrella")
//  }
//  else if (weatherCondition="Sunny"){
//    if (subcondition="Too Hot"){
//      console.log("Use the umbrella")
//    }
//    else{
//      console.log("Don't use the umbrella")
//    }
//  }
//  else{
//    console.log("Don't take the umbrella")
//  }

  // Ternary operator
//  let result = 9<15
//  result ? console.log("Result is True") : console.log("Result is False")
// Task
//  const age=prompt("Enter your age")
//  if (age>60){
//    console.log("senior citizen")
//  }
//  else if(age<18)
//  {
//    console.log("minor")
//  }
//  else{
//    console.log("major")
//  }

  // js false values - false ,0 ,undefined ,NaN , null
  let bool=true
  if (bool){
    //console.log("Bool is true")
  }
  else{
    //console.log("Bool is false")
  }

  // logical operators 

  let a1=0
  let a2="ajsh"
  if (a1||a2){
    console.log("hi")
  }
  let b1=12
  let b2=65

  if (b1 && b2){
    console.log("Hello")
  }

  // for loops
  let arr=[45,57,63,67]
  for (let i=0;i<arr.length;i++){
    console.log(arr[i])
  }

  // while loop
  let rand=Math.random()
  console.log(rand)

  while (rand>0.5){
    console.log("Rand is greater than 5")
    rand=Math.random()
    console.log(rand)
  }
// calculate the factorial
let n=prompt("Enter the number")
let i=1
let sum=1
for (i;i<=n;i++){
  sum=sum*i
}
console.log(sum)

// functions

const printname= (name)=>{
  console.log(name)
}
printname("Shreya")
printname("Hello")