
export const getResult = ( firstNumber:string , secondNumber:string ,operationType:string):string => {
    let result:string = '';
    if ( operationType === '+' ) {
        if ( (firstNumber === '' || firstNumber === '0') && secondNumber !== '') {

            result = secondNumber;
        } else if ( (secondNumber === '' || secondNumber === '0') && firstNumber !== '' ) {
            result = firstNumber;
        } else {
            result = `${Number(firstNumber) + Number(secondNumber)}`;
        }
    } else if ( operationType === '-' ) {
        result = `${Number(firstNumber) - Number(secondNumber)}`;
    } else if ( operationType === 'x') {
        result = `${Number(firstNumber) * Number(secondNumber)}`;
    } else if ( operationType === '/' ) {
        if ( ( firstNumber === '' || firstNumber === '0') && secondNumber !== '0' ) {
            result = '';
        } else if ( firstNumber !== '0' &&  secondNumber === '0') {
            result = 'Error';
        } else {
            result = `${ Number(firstNumber) / Number(secondNumber) }`;
        }
    }
    return result;
};
