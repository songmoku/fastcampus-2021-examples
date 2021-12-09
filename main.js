/* eslint-disable no-console */
// Prototype
function Person(name) {
  this.name = name
}

Person.prototype.greet = function greet() {
  return `Hi, ${this.name}!`
}

function Student(name) {
  this.name = name
}

Student.prototype.study = function study() {
  return `${this.name}! Youre studying`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('Raphael')
console.log(me.greet())
console.log(me.study())
