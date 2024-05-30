// // -------交叉类型（联合类型）
// // let phone: number | string = 13123123123 // 也可以是字符串类型☎️座机
// // let fun = function (type: number | boolean): boolean {
// // 	return !!type
// // }
// // console.log(fun(1))
// // interface Person {
// // 	name: string
// // 	age: number
// // }
// // interface Man {
// // 	sex: number
// // }
// // const xiaoman = (man: Person & Man): void => console.log(man)
// // xiaoman({
// // 	age: 25,
// // 	name: '小明',
// // 	sex: 1
// // })

// // 类型断言
// // let fn = function (num: number | string): void {
// // 	console.log((num as string).length)
// // }
// // fn('12345')

// interface A {
// 	run: string
// }
// interface B {
// 	build: string
// }
// let fn = (type: A | B): void => {
// 	// console.log((<A>type).run)
// 	console.log((type as A).run)
// }
// fn({ build: 'build' })

// const fn1 = (type: any): boolean => {
// 	return type as boolean
// }

// console.log(fn1(1))
