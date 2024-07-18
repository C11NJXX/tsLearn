// TypeScript 规定，变量只有赋值后才能使用
let hello: string = 'hello TypeScript';

function sayHello(sentence: string): void {
    console.log("type of sentence is " + typeof(sentence));
    console.log(sentence);
}

sayHello(hello);

sayHello("hi");

export{}