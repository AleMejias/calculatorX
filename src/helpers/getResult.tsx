export const getResult = ( firstNumber:string , secondNumber:string ,operationType:string):string => {
    let result:string = '';
    console.log(`Primer numero : ${firstNumber} y segundo numero: ${secondNumber}`);
    if ( operationType === '+' ) {
        if ( (firstNumber === '' || firstNumber === '0') && secondNumber !== '') {
            console.log('deberia de entrar aca!');
            result = secondNumber;
        } else if ( (secondNumber === '' || secondNumber === '0') && firstNumber !== '' ) {
            result = firstNumber;
        } else {
            console.log('pero entra aqui!!!!');
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
