import Map from './Map';

export function gradeFor(mark: number): number {
    let roundUp = Math.ceil(mark / 5) * 5;
    return ((roundUp - mark) >= 3 || roundUp < 40) ? mark : roundUp;
}

function hasPassed(mark: number): boolean {
    return (mark >= 40);
}

function map<E>(callback, items: Array<E>): Array<E>{
    let arr: Array<E> = [];
    for (let i in items) 
        arr.push(callback(items[i]));
    return arr;
}

function filter<E>(callback, items: Array<E>) {
    let arr: Array<E> = [];
    for (let i in items) 
        if (callback(items[i])) 
            arr.push(items[i]);
    return arr;
}

function getGrades(marks: number[]): number[] {
    return map<number>(gradeFor, marks);
}

function getPassedGrades(marks: number[]) {
    return filter<number>(hasPassed, marks);
}


// ----------------------------------------------------------------

function isFactorOf(a: number, b: number): boolean {
    return (b % a == 0);
}

function range(start: number, end: number, gap?: number): number[] {
    if (!gap) gap = 1;
    let arr = [];
    for (let i = start; i <= end; i += gap) 
        arr.push(i);
    return arr;
}

function getBetweeners(arr1: number[], arr2: number[]): number[] {
    let cache = new Map<number, number>();
    let fil1: number[] = [];
    let fil2: number[] = [];
    arr1.forEach(num => {
        for (let i = (arr1[arr1.length - 1] / num); i <= (arr2[0] / num); i++) {
            let buf: number = num * i;
            if (cache.has(buf)) {
                cache.put(buf, cache.get(buf) + 1);
                if (cache.get(buf) == arr1.length)
                    fil1.push(buf);
            }
            else cache.put(buf, 1);
        }
    });
    fil1.forEach(fil => {
        let c: number = 0;
        arr2.forEach(chk => {
            if (isFactorOf(fil, chk)) c++;
        });
        if (c == arr2.length) fil2.push(fil);
    })
    return fil2;
}

// function getGrades(marks: number[]): number[] { // Using recursion (High space complexity)
//     if (marks.length <= 0) return [];
//     let arr = [];
//     arr.push(gradeFor(marks[0]));
//     marks.splice(0, 1);
//     return arr.concat(getGrades(marks));
// }

console.log(getGrades([73, 67, 38, 33])); // [ 75, 67, 40, 33 ]
console.log(getPassedGrades([12, 43, 44, 39, 55])); // [ 43, 44, 55 ]
console.log(getBetweeners([2, 4], [16, 32, 96]));