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