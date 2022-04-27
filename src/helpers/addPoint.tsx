const numberWithComma = ( num:string ):string => {
    let valueX:string[] = num.split(',');
    let decimals:string = num.split(',')[1];
    let valueWithOutPoint:string = '';
    let value:string = num;
    // let wholePart:string[] = num.split(',')[0];
/*     console.log(decimals);
    console.log(wholePart); */

    if ( num.includes('.') ) {
        valueX.forEach((character , index) => {
            if ( index === 0 ) {
                valueWithOutPoint = numberWithOutComma( character );
            }
        });
        value = valueWithOutPoint + ',' + decimals;
    } else {
        valueWithOutPoint = numberWithOutComma( num.split(',')[0] );
        value = valueWithOutPoint + ',' + decimals;
    }
    return value;
};

const numberWithOutComma = ( num:string ):string => {
    let valueWithOutPoint:string[] = num.split('').filter((character) => character !== '.');
    let value:string = '';


    valueWithOutPoint.forEach((e , index) => {
        value = value + e;
        if ( valueWithOutPoint.length === 4 && index === 0 )  {
            value = value + '.';
        } else if ( valueWithOutPoint.length === 5 && index === 1 ) {
            value = value + '.';
        } else if ( valueWithOutPoint.length === 6  && index === 2 ) {
            value = value + '.';
        } else if ( valueWithOutPoint.length === 7 && ( index === 0 || index === 3 ) ) {
            value = value + '.';
        } else if ( valueWithOutPoint.length === 8 && ( index === 1 || index === 4 ) ) {
            value = value + '.';
        } else if ( valueWithOutPoint.length === 9 && ( index === 2 || index === 5 ) ) {
            value = value + '.';
        }
    });
    /*
    let value :string = num;
    console.log(value);
    if ( value.length === 4 ){
        value = value.slice(0,1) + '.' + value.slice(1);
    } else if ( value.length === 5 ) {
        value = value.slice(0,2) + '.' + value.slice(2);
    } else if ( value.length === 6 ) {
        value = value.slice(0,3) + '.' + value.slice(3);
    } else if ( value.length === 7 ) {
        value = value.slice(0,1) + '.' + value.slice(1,4) + '.' + value.slice(4);
    } else if ( value.length === 8 ) {
        console.log('Entre aqui!!!!');
        value = value.slice(0,2) + '.' + value.slice(2,5) + '.' + value.slice(5);
    } else if ( value.length === 9 ) {
        value = value.slice(0,3) + '.' + value.slice(3,6) + '.' + value.slice(6);
    }
    */
    return value;
};

// console.log(numberWithOutComa('8.8.8.8888.88'));
console.log(numberWithComma('1234567,23'));


export const addPoint = ( currentNumber:string ): string => {
    // let currentValue = currentNumber.replace('.','').split('');
    let value:string = '';
    if ( currentNumber.includes(',') ) {
        value = numberWithComma( currentNumber );
    } else {
        value = numberWithOutComma( currentNumber );
    }

    console.log('Me devolvio esto!:' + value);
/*     let lengthNumber = currentNumber.includes(',') ? currentNumber.slice(0,currentNumber.indexOf(',')).length : currentValue.length;
    if ( lengthNumber > 3 ) {
        currentValue.forEach(( num , index) => {
            console.log(`num:${num} e indice: ${ index }`)
            value = value + num;
            if ( (lengthNumber === 4 || lengthNumber === 7 ) && (index === 0 || index === 3) ) {
                console.log(`Enentre en la vuelta : ${index}`)
                value = value + '.';
            } else if ( ( lengthNumber === 5 || lengthNumber === 8 ) && ( index === 1 || index === 4 ) ) {
                value = value + '.';
            } else if ( ( lengthNumber === 6 || lengthNumber === 9 ) && ( index === 2 || index === 5) ) {
                value = value + '.';
            }
        });
    } else {
        value = currentNumber;
    } */


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

    return value;

};
