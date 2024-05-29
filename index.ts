// interface 重名 重合
// interface 任意Key
// interface ？ readonly  不允许修改❌
// interface 接口继承
// interface 定义函数类型
// interface 定义函数类型
interface Person {
	name: string
	age?: number
	readonly id: number
	// [propName: string]: any // 索引签名
	readonly cb: () => boolean
}
interface Person {
	Ikun: string
}
let a: Person = {
	id: 1,
	name: '小文',
	age: 20,
	Ikun: 'cxk',
	cb: () => true
}
interface B extends Person {
	gender: string
}
let b: B = {
	id: 1,
	name: '小文',
	age: 20,
	Ikun: 'cxk',
	gender: 'male',
	cb: () => true
}
interface Fn {
	(name: string): number[]
}
const fn: Fn = function (name: string) {
	return [123]
}
