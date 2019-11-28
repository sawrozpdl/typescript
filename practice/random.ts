import Number from './utils/Number';

interface toString {
    <E>(argument: E):string
}

let define:toString = <E>(val:E): string => {
    return `i am doing ${val}`
}

console.log(define<number>(88));
//console.log(new Number(881).getRomanValue());