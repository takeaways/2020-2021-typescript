interface A {
    hello: true
}

interface B {
    bye: false
}

type C = {
    hi: false
}

const c: A & B & C = {
    hello: true,
    bye: false,
    hi: false,
};
console.log(c);