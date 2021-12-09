/* eslint-disable no-unused-vars */
const ary = [1, 2, 3, 4, 5]
const [head, ...rest] = ary

console.log(head, ...rest)

const personalData = {
  email: 'adf@fafd.com',
  password: '******',
}

const publicData = {
  nickname: 'goo',
}

const overrides = {
  email: 'fffff@f.com',
}

const shouldOverride = true

const user = {
  ...publicData,
  ...personalData,
  ...(shouldOverride
    ? {
        email: 'mf@f.com',
      }
    : null),
}

console.log(user)
