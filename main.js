/* eslint-disable no-unused-vars */
/* eslint-disable no-new */

function retrunPromiseForTimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random())
    }, 1000)
  })
}

new Promise((resolve, reject) => {
  console.log('Before timeout')
  setTimeout(() => {
    resolve(Math.random())
    console.log('After resolve')
  }, 1000)
})
  .then((value) => {
    console.log('then 1')
    console.log('value', value)
  })
  .then(() => {
    console.log('then 2')
  })
  .then(() => {
    console.log('then 3')
  })
