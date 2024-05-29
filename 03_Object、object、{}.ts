// Object(原型链顶端)
// let a: Object = { name: 'John', age: 30 }
// a = 123
// a = '123'
// a = true
// a = null // 非严格类型
// a = undefined // 非严格类型
// a = () => {} // 函数

// object 非原始类型
// let a: object = { name: 'John', age: 30 }
// 错误❌
// a = 123
// a = '123'
// a = true
// a = null // 非严格类型
// a = undefined // 非严格类型
// a = () => {} // 函数<|endoftext|>
// a = true
// a = false
// 正确✅
// a = []
// a = {}
// a = () => 123

// let a: {} // new Object 所以包含所有类型
let a: {} = 123
// 字面量类型不能赋值属性，所以不能赋值给a
let a1: {} = '123'
let a2: {} = [123]
let a3: {} = { name: 'John' }
