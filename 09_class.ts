// // 1. class 的基本用法 继承 和 类型约束 implements
// // 2. class 的装饰符 readonly private protected public
// // 3. super 原理
// // 4. 静态方法
// // 5. get set
// // private 只能在内部使用
// // protected 给子类和内部类使用
// // public 哪儿都能用
// interface Options {
// 	el: string | HTMLElement
// }
// interface VueCls {
// 	options: Options
// 	init(): void
// }
// interface Vnode {
// 	readonly tag: string // div section header
// 	text?: string // 文本内容
// 	children?: Vnode[] // 子节点
// }
// // 虚拟dom简单版
// class Dom {
// 	constructor() {}
// 	// 创建节点的方法
// 	private createElement(el: string) {
// 		return document.createElement(el)
// 	}
// 	// 填充文本的方法
// 	private setText(el: HTMLElement, text: string | null) {
// 		el.textContent = text
// 	}
// 	// 渲染函数
// 	protected render(data: Vnode) {
// 		let root = this.createElement(data.tag)
// 		if (data.children && Array.isArray(data.children)) {
// 			data.children.forEach((item) => {
// 				let child = this.render(item)
// 				root.appendChild(child)
// 			})
// 		} else {
// 			this.setText(root, data.text || '')
// 		}
// 		return root
// 	}
// }
// class Vue extends Dom implements VueCls {
// 	options: Options
// 	constructor(options: Options) {
// 		super() // 父类的prototype.constructor.call
// 		this.options = options
// 	}
// 	static xxx() {}
// 	static version() {
// 		// 静态方法的调用
// 		this.xxx // static中this指向的都是静态方法、静态属性
// 		return '1.0.0'
// 	}
// 	public init(): void {
// 		// 虚拟DOM 就是通过js去渲染我们这个真实dom
// 		let data: Vnode = {
// 			tag: 'div',
// 			children: [
// 				{
// 					tag: 'section',
// 					text: '我是子节点1'
// 				},
// 				{
// 					tag: 'header',
// 					text: '我是子节点2'
// 				}
// 			]
// 		}
// 		let app =
// 			typeof this.options.el == 'string'
// 				? document.querySelector(this.options.el)
// 				: this.options.el
// 		app?.appendChild(this.render(data))
// 	}
// }

// let vue = new Vue({
// 	el: '#app'
// })

// Vue.version() // 1.0.0<|endoftext|>

// class Ref {
// 	_value: any
// 	constructor(value: any) {
// 		this._value = value
// 	}

// 	get value() {
// 		return this._value + 'vvv'
// 	}

// 	set value(newValue) {
// 		this._value = newValue + '小满'
// 	}
// }

// const ref = new Ref('哈哈哈')
// console.log(ref.value)
// ref.value = '坏人'
// console.log(ref.value)
