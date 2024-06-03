// // 基类 抽象类
// // abstract 所定义的抽象类
// // abstract 所定义的方法 都只能描述不能进行一个实现
// // 抽象类无法被实例化
// abstract class Vue {
// 	name: string
// 	constructor(name?: string) {
// 		this.name = name
// 	}
// 	getName(): string {
// 		return this.name
// 	}
// 	abstract init(name: string): void
// }

// class React extends Vue {
// 	constructor() {
// 		super()
// 	}
// 	init(name: string) {}
// 	setName(name: string) {
// 		this.name = name
// 	}
// }

// const react = new React()
// react.setName('小满')
// console.log(react.getName())
