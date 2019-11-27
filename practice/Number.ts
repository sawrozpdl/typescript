class Number {
    num: number;
    chars: string[] = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    constructor(number: number) {
        this.num = number;
    }

    private getRomanFor(element: number): string {
        const str = element + '';
        const min = 2 * (str.length - 1); // minimum index in the array that the number covers (see the note set)
        switch(str.charAt(0)) {
            case "1":
                return this.chars[min];
            case "2":
                return this.chars[min] + this.chars[min];
            case "3":
                return this.chars[min] + this.chars[min] + this.chars[min];
            case "4":
                return this.chars[min] + this.chars[min + 1];
            case "5":
                return this.chars[min + 1];
            case "6":
                return this.chars[min + 1] + this.chars[min];
            case "7":
                return this.chars[min + 1] + this.chars[min] + this.chars[min];
            case "8":
                return this.chars[min + 1] + this.chars[min] + this.chars[min] + this.chars[min];
            case "9":
                return this.chars[min] + this.chars[min + 2];
            case "10":
                return this.chars[min + 2];
            default:
                return ''
        }
    }

    public splitUnits(): number[] {
        const str = this.num + '';
        const count: number = str.length;
        let array: number[] = [];
        for (let i:number = 0;i < count;i++) {
            array.push(+str.charAt(i) * Math.pow(10, (count - i - 1)));
        }
        return array;
    }

    public getRomanValue():string {
        let roman: string = '';
        this.splitUnits().forEach(unit => {
            roman += this.getRomanFor(unit);
        });
        return (roman) ? roman : "0";
    }
}

export default Number;