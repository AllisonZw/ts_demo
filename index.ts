// 1.生成器 跟函数用法一样
// function* gen() {
// 	yield Promise.resolve('小满') // 同步异步
// 	yield '大满'
// 	yield '中满'
// 	yield '小盈'
// }

// const man = gen()
// console.log(man.next())
// console.log(man.next())
// console.log(man.next())
// console.log(man.next())
// console.log(man.next())
// { value: Promise { '小满' }, done: false }
// { value: '大满', done: false }
// { value: '中满', done: false }
// { value: '小盈', done: false }
// { value: undefined, done: true } 不能迭代了，done为true<|endoftext|>

// 2.迭代器
// 3.set map
let set: Set<number> = new Set([1, 2, 3, 3, 5, 5]) // 天然去重
let map: Map<any, any> = new Map()
let Arr = [1, 2, 3]
map.set(Arr, 'hello') // 可以拿引用类型当作key
// console.log('🚀 ~ file: index.ts:28 ~ map:', map)
function args() {
	console.log(arguments) // 伪数组
}
// let list = document.querySelectorAll('div') // 伪数组
// 可以用于遍历所有的元素
// const each = (value: any) => {
// 	let It: any = value[Symbol.iterator]()
// 	let next: any = { done: false }
// 	while (!next.done) {
// 		next = It.next()
// 		if (!next.done) {
// 			console.log(next.value)
// 		}
// 	}
// }
// each(set)
// 5.迭代器的语法糖
for (const value of set) {
	console.log(value)
}
