import { CalculatorState } from '../interfaces/CalculatorState';
import { handlePointAndComma } from './handlePointAndComma';


export const handleScreenView = ( state:CalculatorState ):string => {
    let currentR:string = '';
    if ( state.currentResult === 'Infinity' ) {
        currentR = 'Error';
    } else if ( state.currentResult.includes('+') || state.currentResult.length > 9 ) {
        if ( state.isActive && state.firstNumber !== '' && state.secondNumber !== '' ) {
            currentR = state.secondNumber;
        } else if ( state.currentResult.includes('.') ) {
            console.log('es aqui que esta ahora!');
            // currentR = Number(state.currentResult).toFixed(2).toString();
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
};
