function add(a, b) {
    let res = a + b;
    return res;
}

function sub(a, b) {
    let res = a - b;
    return res;
}

function div(a, b) {
    let res = a / b;
    return res.toFixed(2);
}

function mult(a, b) {
    let res = a * b;
    return res;
}

export { add, sub, div, mult };