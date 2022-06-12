let a = "b"
let b = function (){ console.log("h")}
const objectTest = {
    x:a,
    y:b
}
// 简化
const objectTest1 ={
    x1:a,y1:b,z:"b",c(){
        console.log("d")
    }
}
// 解构
let {x,y} = objectTest
console.log(objectTest)
console.log(objectTest1)
console.log(x)
// 对象传播
let{x1,y1,...pp} = objectTest1
console.log(a)
console.log(b)
console.log(pp)