export const numberWithComma = ( num:string ):string => {

    let decimals:string = num.split(',')[1];
    let valueWithOutPoint:string = '';
    let value:string = num;

    valueWithOutPoint = numberWithOutComma( num.split(',')[0] );
    value = valueWithOutPoint + ',' + decimals;

    return value;
};

const numberWithOutComma = ( num:string ):string => {

    let valueWithOutPoint:string[] = num.split('').filter((character) => character !== '-');
    let handleSymbol:boolean = num[0] === '-';
    let value:string = '';

    if ( num.includes('-') && num.length === 4 ) { return num;}

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

     if ( handleSymbol ) {
         value = '-' + value;
     }

    return value;
};


export const handlePointAndComma = ( currentNumber:string ): string => {

    let value:string = '';

    if ( currentNumber.includes(',') ) {
        value = numberWithComma( currentNumber );
    } else {
        value = numberWithOutComma( currentNumber );
    }


    return value;

};
