// https://www.codewars.com/kata/5e5b7f55c2e8ae0016f42339

function polishNotation(expression) {
    const arr = expression.split(' ');
    const stack = [];

    while(arr.length) {
        const el = arr.pop();
        const numberedEl = Number(el);

        if (!isNaN(numberedEl)) {
            stack.push(numberedEl);
            continue; 
        }

        const firstElement = stack.pop();
        const secondElement = stack.pop();

        switch (el) {
            case '+':
                stack.push(firstElement + secondElement);
                break;
            case '-':
                stack.push(firstElement - secondElement);
                break;
            case '/':
                stack.push(firstElement / secondElement);
                break;
            case '*':
                stack.push(firstElement * secondElement);
                break;
        }
    }

    return stack[0];
}

console.log(polishNotation('123.456'), 123.456);
console.log(polishNotation('+ -5 5'), 0);
console.log(polishNotation('+ 3 5'), 8);
console.log(polishNotation('* + 2 2 3'), 12);
console.log(polishNotation('/ + 3 5 * 2 2'), 2);