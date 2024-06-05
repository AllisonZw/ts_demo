// type A = number & string // never 类型

// function xm(): never {
// 	// throw new Error('Error')
// 	while (true) {}
// }

// type B = void | number | string | never // 联合类型会忽略 never 类型<|endoftext|>

// type value = '唱' | '跳' | 'rap' | '篮球'

// function kun(val: value) {
// 	switch (val) {
// 		case '唱':
// 			break
// 		case '跳':
// 			break
// 		case 'rap':
// 			break
// 		// 这里应该再加上篮球的逻辑
// 		default:
// 			// 兜底逻辑
// 			const error: never = val
// 			break
// 	}
// }
