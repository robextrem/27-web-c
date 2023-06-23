const uniqueNumbers = (n : number) : number[] => [...Array(n).keys()];

const alternateNumbers = (numbers : number[]) =>{
    numbers.map((num : number, i) =>{
        numbers[i] = (num % 2 == 0)? num : -num;
    });
    return numbers.sort((a,b) => a - b);
}

console.log(alternateNumbers(uniqueNumbers(5)));


const randomValues  = [
    'Hello',
    0,
    true,
    { name: 'John Doe' },
    [3,2],
    () => 'Hello World'
  ]

const randomizeValues = <T>(values: T[]) : T[] => {
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }
    return values;
  }
  
  // Example usage
  console.log(randomizeValues(randomValues));



    const z :number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const r :number = Math.ceil(Math.random() * 10);


    const numbers = [5,2,3,4,1,6,7,8,9,10] as const

    //  create a function that infer the parameter and return a TYPECHECK of the elements SORTED.

    const typeCheckAndSort = <T extends ReadonlyArray<number>>(numbers:T): number[] =>{
        return [...numbers].sort((a,b) => a - b);
    }

    console.log(typeCheckAndSort(numbers));