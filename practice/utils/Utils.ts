import Map from './Map';

export function gradeFor(mark: number): number {
    let roundUp = Math.ceil(mark / 5) * 5;
    return ((roundUp - mark) >= 3 || roundUp < 40) ? mark : roundUp;
}

function hasPassed(mark: number): boolean {
    return (mark >= 40);
}

function map<E>(callback, items: Array<E>): Array<E> {
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
    let arr: number[] = [];
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

export function sumOfIntervals(intervals: [number, number][]): number {
    if (intervals.length <= 0) return 0;
    let temp = (intervals[0][1] - intervals[0][0]);
    intervals.splice(0, 1);
    return temp + sumOfIntervals(intervals);
}


// ---------------------------------------------------- ///

function balanceStatements(list: string): string {
    let buy: number = 0;
    let sell: number = 0;
    let badCount: number = 0;
    let badString: string = ``
    list.split(', ').forEach(order => {
        if (!order) return;
        let items: string[] = order.split(' ');
        let quantity: string = items[1];
        let price: string = items[2];
        let status: string = items[3];
        if (price.indexOf('.') === -1 || isNaN(+price) || !status) {
            badString += `${order} ;`;
            badCount++;
            return;
        }
        if (status === 'B')
            buy += +quantity * parseFloat(price);
        else sell += +quantity * parseFloat(price);
    });
    return `Buy: ${Math.ceil(buy)} Sell: ${Math.ceil(sell)}${(badCount > 0) ? (`; Badly formed ${badCount}: ` + badString) : ''}`;
}
 
////=-------------------

function swap(arr, ind1, ind2):void {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

function sort<E>(array: E[], condition):E[] {
    for(let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length;j++) {
            if (!condition(array[i], array[j])) {
                swap(array, i, j);
            }
        }
    }
    return array;
}

export function bSearch(array, start, end, value):boolean {
    if (end == start) return (array[start] == value)
    let mid = (start + end) / 2;
    if (array[mid] == value) return true;
    else if (value < array[mid])
        return bSearch(array, start, mid - 1, value);
    return bSearch(array, mid + 1, end, value);
}

let array:number[] = [3, 2, 1, 32, 12, 7, 56];
sort<number>(array, function (left: number, right: number) {
    return (left < right);
});




interface position {
    x:number,
    y:number
}

function getStartCoordinates(maze:number[][], number:number):position {
    for (let i = 0; i < maze.length;i++) {
        for (let j = 0; j < maze.length;j++) {
            if (maze[i][j] == number)
                return {x : j, y : i}
        }
    }
    return {x : -1, y: -1}
}

export function mazeRunner(maze:number[][], directions:string[]): string{
    let player:position = getStartCoordinates(maze, 2);
    console.log(player);
    for (let dir of directions) {
        switch(dir) {
            case 'N':
                player.y -= 1;
                break;
            case 'S':
                player.y += 1;
                break;
            case 'E':
                player.x += 1;
                break;
            case 'W':
                player.x -= 1;
                break; 
        }
        if (maze[player.y][player.x] == 3) return 'Finish'
        else if (player.x < 0 || player.x >= maze.length || player.y < 0 || player.y >= maze.length || maze[player.y][player.x] != 0) return 'Dead'
    }
    return 'Lost';
}

let maze:number[][] = 
           [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]));
console.log(array);
console.log(bSearch(array, 0,array.length - 1, 9));

console.log(balanceStatements("ZNGA 1300 2.66, CLH15.NYM 50 56.32 S, OWW 1000 11.623 S, OGG 20 580.1 S"));

// console.log(getGrades([73, 67, 38, 33])); // [ 75, 67, 40, 33 ]
// console.log(getPassedGrades([12, 43, 44, 39, 55])); // [ 43, 44, 55 ]
// console.log(getBetweeners([2, 4], [16, 32, 96]));
// console.log(sumOfIntervals([[1, 4], [7, 10], [3, 5]]));