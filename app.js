const myname= "Shreya"
let num=5

console.log(myname)
console.log(num)

num=10
console.log(num)

let mynumber;
console.log(mynumber)

let boolvalue=true
let nullvalue=null

console.log(boolvalue)
console.log(nullvalue)

//  Array

let arr = [1, 20, "John", "good"]
// console.log(arr)

let intergerArray = [2, 5, 7, 9, 11] 

console.log(intergerArray.length)
console.log(intergerArray[0])
console.log(intergerArray[1])
console.log(intergerArray[intergerArray.length-1])

// Object

const person = {
    name: {
      firstName: "John",
      secondName: "Doe"
    },
    age: 25,
    place: "London"
  }
  
  // console.log(person)
  
  
  const student = {
    name: "Shreya",
    age: 25,
    courses: [
      {
        courseName: "JS",
        courseCredits: 3
      },
      {
        courseName: "MERN",
        courseCredits: 4
      }
    ]
  }
  
  console.log(student.courses)
  console.log(student.courses[0])
  console.log(student.courses[1].courseName)

  // template strings
  let myNewname="Shreya1"

  console.log(`Hello,${myNewname}!`)

  //Using prompt

  const username= prompt("Enter username: ")
  alert(`hello,${username}!`)
  // using aithmetic operations

  let a=7
  let b=3
  console.log(a+b)
  console.log(a-b)
  console.log(a*b)
  console.log(a/b)
  console.log(a%b)
  a++
  console.log(a)
  b--
  console.log(b)

  // operations
  console.log(3>4)
  console.log(3<4)
  console.log(3>=4)
  console.log(3>=3)
  console.log(3=='3')
  console.log(3==='3')

  // conditions
  let weatherCondition="Sunny"
  let subcondition="Too Hot"

  if (weatherCondition="Cloudy"){
    console.log("Take an umbrella")
  }
  else if (weatherCondition="Rainy"){
    console.log("Use an umbrella")
  }
  else if (weatherCondition="Sunny"){
    if (subcondition="Too Hot"){
      console.log("Use the umbrella")
    }
    else{
      console.log("Don't use the umbrella")
    }
  }
  else{
    console.log("Don't take the umbrella")
  }

  // Ternary operator
  let result = 9<15
  result ? console.log("Result is True") : console.log("Result is False")