// number[]
let arr: number[] = [1, 2, 3]
let arr1: boolean[] = [true, false, true]
// Array<T>
let arr2: Array<number> = [123]
// 数组普通类型
interface X {
	name: string
	age?: number
}
let arr3: X[] = [{ name: 'John', age: 13 }, { name: 'Mike' }] // 数组元素类型为X
// 二维数组
let arr4: number[][] = [[1], [2], [3]]
let arr5: Array<Array<number>> = [[1], [2], [3]]
let arr6: any[] = [1, '2', true, {}] // 数组中包含不同类型元素<|endoftext|>
let arr7: [number, string, boolean, {}] = [1, '2', true, {}] // 原组类型

function a(...args: any[]) {
	console.log(arguments) // 类数组
	let a: A = arguments
	console.log('🚀 ~ file: index.ts:21 ~ a ~ a:', a)
}
a(1, '2', true, {}) // 传入任意参数<|endoftext|>
interface A {
	callee: Function
	length: number
	[index: number]: any
}
