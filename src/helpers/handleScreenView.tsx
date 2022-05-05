import { CalculatorState } from '../interfaces/CalculatorState';
import { handlePointAndComma } from './handlePointAndComma';

export const handleScreenView = ( state:CalculatorState ):string => {
    let currentR:string = '';
    let size:number|string;

    if ( state.currentResult === '' && state.currentNumbers === '' && !state.isActive) {
        currentR = '0';
    } else if ( state.currentResult === 'Infinity' || state.currentResult === 'NaN') {
        currentR = 'Error';
    } else if ( state.currentNumbers !== '' ) {
        currentR = handlePointAndComma( state.currentNumbers.replace('.',',') );
    } else if ( state.isActive ) {
        currentR = handlePointAndComma( state.firstNumber.replace('.',',') );
    } else if ( state.currentResult.includes('e') ) {
        size = state.currentResult.slice( state.currentResult.indexOf('e') ).length;
        if ( size > 4 ) {
            currentR = `${ Number(state.currentResult).toExponential(4).toString().replace('.',',') }`;
        } else if ( size > 3 ) {
            currentR = `${ Number(state.currentResult).toExponential(5).toString().replace('.',',') }`;
        } else {
            currentR = `${ Number(state.currentResult).toExponential(6).toString().replace('.',',') }`;
        }
    } else if ( !state.currentResult.includes('e') ) {
        if ( state.typeOfOperation === '/' || state.typeOfOperation === '+' || state.typeOfOperation === 'x') {
            if ( state.currentResult.length < 10 ) {
                currentR = `${ Number( state.currentResult ) }`.replace('.',',');
                currentR = handlePointAndComma(currentR.replace('.',','));
            } else {
                currentR = `${ Number( state.currentResult ).toFixed(3)}`;
                currentR = handlePointAndComma(currentR.replace('.',','));
            }
        } else if ( state.currentResult.length < 10 ) {
            currentR = handlePointAndComma( state.currentResult.replace('.',',') );
        } else if ( state.currentResult.length < 11 ) {
            if ( state.currentResult[0] === '-' ) {
                currentR = handlePointAndComma( state.currentResult.replace('.',',') );
            } else {
                currentR = `${ Number(state.currentResult).toExponential(6).toString().replace('.',',') }`;
            }
        } else {
            currentR = `${ Number(state.currentResult).toExponential(5).toString().replace('.',',') }`;
        }
    }






    /* else if ( state.currentResult.includes('+') || state.currentResult.length > 9 ) {
        if ( state.isActive && state.firstNumber !== '' && state.secondNumber !== '' ) {
            currentR = state.secondNumber;
        } else if ( state.currentResult.includes('.') ) {
            console.log('es aqui que esta ahora!');
            currentR = handlePointAndComma( state.currentResult );
        } else {
            currentR = handlePointAndComma( state.currentResult , state.typeOfOperation );
        }
    } else if ( state.currentResult.includes('.') ) {
        if ( state.isActive && state.firstNumber !== '' && state.secondNumber !== '' ) {
            currentR = state.secondNumber;
        } else {
            currentR =  handlePointAndComma( state.currentResult.replace('.',','), state.typeOfOperation);
        }
    } else if ( state.currentNumbers.includes('.') ) {
        currentR =  handlePointAndComma( state.currentNumbers.replace('.',','), state.typeOfOperation);
    } else if ( state.isActive && state.firstNumber !== '' && state.secondNumber === '' && state.firstNumber.includes('.') ) {
        currentR = state.firstNumber.replace('.',',');
    } else if ( state.isActive && state.firstNumber !== '' && state.secondNumber === '' ) {
        currentR = handlePointAndComma( state.firstNumber );
    } else if ( state.currentNumbers === '' && state.currentResult === '' ) {
        currentR = '0';
    } else if ( state.currentNumbers !== '' ) {
        currentR = handlePointAndComma( state.currentNumbers );
    } else {
        currentR = handlePointAndComma( state.currentResult , state.typeOfOperation);
    } */
    return currentR;
};





















































/* export const handleScreenView = ( state:CalculatorState ):string => {
    let currentR:string = '';
    if ( state.currentResult === 'Infinity' ) {
        currentR = 'Error';
    } else if ( state.currentResult.includes('+') || state.currentResult.length > 9 ) {
        if ( state.isActive && state.firstNumber !== '' && state.secondNumber !== '' ) {
            currentR = state.secondNumber;
        } else if ( state.currentResult.includes('.') ) {
            console.log('es aqui que esta ahora!');
            currentR = handlePointAndComma( state.currentResult );
        } else {
            currentR = handlePointAndComma( state.currentResult , state.typeOfOperation );
        }
    } else if ( state.currentResult.includes('.') ) {
        if ( state.isActive && state.firstNumber !== '' && state.secondNumber !== '' ) {
            currentR = state.secondNumber;
        } else {
            currentR =  handlePointAndComma( state.currentResult.replace('.',','), state.typeOfOperation);
        }
    } else if ( state.currentNumbers.includes('.') ) {
        currentR =  handlePointAndComma( state.currentNumbers.replace('.',','), state.typeOfOperation);
    } else if ( state.isActive && state.firstNumber !== '' && state.secondNumber === '' && state.firstNumber.includes('.') ) {
        currentR = state.firstNumber.replace('.',',');
    } else if ( state.isActive && state.firstNumber !== '' && state.secondNumber === '' ) {
        currentR = handlePointAndComma( state.firstNumber );
    } else if ( state.currentNumbers === '' && state.currentResult === '' ) {
        currentR = '0';
    } else if ( state.currentNumbers !== '' ) {
        currentR = handlePointAndComma( state.currentNumbers );
    } else {
        currentR = handlePointAndComma( state.currentResult , state.typeOfOperation);
    }
    return currentR;
}; */
