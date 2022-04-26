
export const addPoint = ( currentNumber:string ): string => {
    let lengthNumber = currentNumber.length;
    let value = currentNumber;

    if ( lengthNumber === 4){
        value = currentNumber.slice(0, 1) +  '.' + currentNumber.slice(1);
    } else if ( lengthNumber === 5 ) {
        value = currentNumber.slice(0,2) + '.' + currentNumber.slice(2);
    } else if ( lengthNumber === 6 ) {
        value = currentNumber.slice(0,3) + '.' + currentNumber.slice(3);
    } else if ( lengthNumber === 7 ) {
        value = currentNumber.slice(0,1) + '.' + currentNumber.slice(1,4) + '.' + currentNumber.slice(4);
    } else if ( lengthNumber === 8 ) {
        value = currentNumber.slice(0,2) + '.' + currentNumber.slice(2,5) + '.' + currentNumber.slice(5);
    } else if ( lengthNumber === 9 ) {
        value = currentNumber.slice(0,3) + '.' + currentNumber.slice(3,6) + '.' + currentNumber.slice(6);
    }

    return value;

};
