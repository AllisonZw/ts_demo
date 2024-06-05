// let a1: symbol = Symbol(1) // 唯一的
// let a2: symbol = Symbol(1) // 唯一的
// // for Symbol for会在全局Symbol有没有注册过这个key，如果有就直接拿来弄，如果没有就注册一个新的Symbol
// // console.log(Symbol.for('xiaoman') === Symbol.for('xiaoman'))

// let obj = {
// 	name: 1,
// 	[a1]: 111,
// 	[a2]: 222
// }

// // for in 不能读到symbol
// for (const key in obj) {
// 	// console.log(key)
// }
// // keys 也不能读到symbol
// // console.log(Object.keys(obj))
// // getOwnPropertyNames 也不能读取symbol
// // console.log(Object.getOwnPropertyNames(obj)) // [Symbol(1), Symbol(1)]<|endoftext|>
// // getOwnPropertySymbols 只能读取对象自身的symbol属性
// // console.log(Object.getOwnPropertySymbols(obj))

// console.log(Reflect.ownKeys(obj))
