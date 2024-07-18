// ts编译器自动推断类型为number
let varWithNoType = 123;

// 自动推断函数返回值 String
function showVarType(v: any) {
    console.log(typeof(v));
    return String(v);
}

let res = showVarType(varWithNoType);

console.log("return type = " + typeof(res));

export{}