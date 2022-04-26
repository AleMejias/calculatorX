
export const addPoint = ( currentNumber:string ): string => {
    let currentValue = currentNumber.replace('.','').split('');
    let value:string = '';

    let lengthNumber = currentNumber.includes(',') ? currentNumber.slice(0,currentNumber.indexOf(',')).length : currentValue.length;

    currentValue.forEach(( num , index) => {
        value = value + num;
        if ( (lengthNumber === 4 || lengthNumber === 7 ) && (index === 0 || index === 3) ) {

            if ( currentValue[index + 1] !== ',' ) {
                value = value + '.';
            }
        } else if ( ( lengthNumber === 5 || lengthNumber === 8 ) && ( index === 1 || index === 4 ) ) {
            if ( currentValue[index + 1] !== ',' ) {
                value = value + '.';
            }
        } else if ( ( lengthNumber === 6 || lengthNumber === 9 ) && ( index === 2 || index === 5) ) {
            if ( currentValue[index + 1] !== ',' ) {
                value = value + '.';
            }
        }
    });


/*     if ( lengthNumber === 4 ){
        value = value.slice(0,1) + '.' + value.slice(1);
    } else if ( lengthNumber === 5 ) {
        value = value.slice(0,2) + '.' + value.slice(2);
    } else if ( lengthNumber === 6 ) {
        value = value.slice(0,3) + '.' + value.slice(3);
    } else if ( lengthNumber === 7 ) {
        value = value.slice(0,1) + '.' + value.slice(1,4) + '.' + value.slice(4);
    }
    if ( lengthNumber === 8 ) {
        value = value.slice(0,2) + '.' + value.slice(2,5) + '.' + value.slice(5);
    } else if ( lengthNumber === 9 ) {
        value = value.slice(0,3) + '.' + value.slice(3,6) + '.' + value.slice(6);
    } */

    return currentValue.join('');

};
console.log(addPoint('12345'));
