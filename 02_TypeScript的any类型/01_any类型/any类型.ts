// any类型相当于关闭了编译器的类型检查，但是当使用let var声明变量时，不显示声明变量类型推断成了any，使用no implicit也不会报错

let a: any;

a = 1;
a = "1";
a = {o:1};

//类型污染

let x: any;
let y:number;

x = "123";
y = x;//类型污染

export{}