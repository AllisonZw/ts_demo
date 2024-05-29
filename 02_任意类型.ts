// any 任意类型 unknown 不知道的类型
// 1. top type 顶级类型 any unknown
// 2. Object
// 3. Number String Boolean Symbol
// 4. number string boolean symbol
// 5. 123 "hello" true false null undefined
// 6. never
// *unknow 只能赋值给自身(unknow)或者是any
// unknow 没有办法读取任何属性 方法也不可以调用
// unknow 比 any 更加安全

// let xiaowen: any = { shuai: true, open: () => 123 }
// console.log(xiaowen.shuai)
// 123
