// // 1.函数定义类型和返回值 ｜ 箭头函数定义类型和返回值
// // 2.函数默认的参数 ｜ 函数可选参数
// // const add = (a: number = 10, b: number = 20): number => a + b
// // 3.参数是一个对象如何定义
// // interface User {
// // 	name: string
// // 	age: number
// // }
// // function add(user: User): User {
// // 	return user
// // }
// // console.log(add({ name: 'Tom', age: 20 }))
// // 4.函数this类型
// interface Obj {
// 	user: number[]
// 	add: (this: Obj, num: number) => void
// }
// // ts 可以定义this的类型 在js中无法使用 必须是第一个参数定义this的类型
// let obj: Obj = {
// 	user: [1, 2, 3],
// 	add(this: Obj, num: number) {
// 		this.user.push(num)
// 	}
// }
// obj.add(4)
// console.log(obj)
// // 5.函数重载
// let user: number[] = [1, 2, 3]
// // 实现函数
// function findNum(add: number[]): number[] // 如果传的是一个number类型的数组那就做添加
// function findNum(id: number): number[] // 如果传的是一个number类型的数字那就做查找
// function findNum(): number[] // 如果没有传入东西就是查询全部
// function findNum(ids?: number | number[]): number[] {
// 	if (typeof ids === 'number') {
// 		return user.filter((item) => item === ids)
// 	} else if (Array.isArray(ids)) {
// 		user.push(...ids)
// 		return user
// 	} else {
// 		return user
// 	}
// }
// console.log(findNum(2)) // 查找单个
// console.log(findNum()) // 查询全部;
// console.log(findNum([4, 5, 6])) // 添加多个
