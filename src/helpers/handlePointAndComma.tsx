const numberWithComma = ( num:string ):string => {

    // let valueArr:string[] = num.split(',');
    let decimals:string = num.split(',')[1];
    let valueWithOutPoint:string = '';
    let value:string = num;
/*     if ( num.includes('.') ) {

        valueArr.forEach((character , index) => {
            if ( index === 0 ) {
                valueWithOutPoint = numberWithOutComma( character );
            }
        });
        value = valueWithOutPoint + ',' + decimals;
    } else {
        console.log('llama al CON coma!');
        valueWithOutPoint = numberWithOutComma( num.split(',')[0] );
        value = valueWithOutPoint + ',' + decimals;
    } */
    valueWithOutPoint = numberWithOutComma( num.split(',')[0] );
    value = valueWithOutPoint + ',' + decimals;
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

    return value;
};


export const handlePointAndComma = ( currentNumber:string ): string => {
    let value:string = '';

    if ( currentNumber.length > 9 && currentNumber.length < 11 ) {
        value = Number(currentNumber).toExponential(6).toString().replace('+','').replace('.',',');
    } else if ( currentNumber.length >= 11 && currentNumber.length <= 21){
        value = Number(currentNumber).toExponential(5).toString().replace('+','').replace('.',',');
        console.log(`Numero ${currentNumber} tamaño ${currentNumber.length}`);
    } else if ( currentNumber.length > 21 && currentNumber.includes('+')) {
        console.log(currentNumber);
    } else if ( currentNumber.includes(',') ) {
        value = numberWithComma( currentNumber );
    } else {
        value = numberWithOutComma( currentNumber );
    }    return value;

};
