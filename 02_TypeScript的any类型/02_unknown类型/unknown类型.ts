// unknown类型就像是严格版的any类型，它不允许将自己作为除any和自身以外的其他类型的赋值，同时只有对类型进行缩小后才能作除比较操作以外的运算符

let a: unknown;

a = 123;

//不能将类型“unknown”分配给类型“string”。ts(2322)
//let b: string = a;

//“a”的类型为“未知”。ts(18046)
//a = a + 1;

if(typeof(a) === "number") {
    a = a + 1; //缩小类型范围后 语句合法
}

console.log(a);

export { }