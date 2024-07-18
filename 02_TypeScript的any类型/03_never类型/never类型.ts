//never类型意味着不可能有值，为了实现集合论的完整性，never类型就像空集，空集是任意集合的子集，所以never类型可以用于给任何类型赋值

function f(): never{
    throw new Error("ffffff");
}

let a: any = f();

let b: number = f();

let c: string = f();