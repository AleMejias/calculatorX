import { changeToPositiveOrNegative } from '../helpers/changeToPositiveOrNegative';
import { getResult } from '../helpers/getResult';
import { handlePercent } from '../helpers/handlePercent';
import { CalculatorState } from '../interfaces/CalculatorState';


export type Actions =
| { type: 'calculate' }
| { type: 'changeToPositiveOrNegative' , payload: string }
| { type: 'clear' }
| { type: 'operation' , payload:string }
| { type: 'percent' , payload:string }
| { type: 'setNumber', payload: string };

export const initialValue : CalculatorState = {
    currentNumbers:'',
    currentResult:'',
    firstNumber: '',
    secondNumber: '',
    typeOfOperation: '',
    isActive:false,
};


export const calculatorReducer = ( state:CalculatorState, action:Actions ) => {
    let result:string = '';
    switch ( action.type ) {
        case 'changeToPositiveOrNegative':
            if ( state.currentResult !== '' ) {
                return {
                    ...state,
                    currentResult: changeToPositiveOrNegative(state.currentResult),
                    firstNumber: changeToPositiveOrNegative(state.currentResult),
                };
            } else {
                return {
                    ...state,
                    currentNumbers: changeToPositiveOrNegative(state.currentNumbers),
                    secondNumber: changeToPositiveOrNegative( state.currentNumbers ),
                };
            }
        case 'calculate':
            if ( state.isActive ) {
                if ( state.firstNumber !== '' && state.secondNumber !== '' && state.currentResult === '' ) {
                    result = getResult( state.firstNumber,state.secondNumber,state.typeOfOperation );
                    return {
                        ...state,
                        currentResult: result,
                        currentNumbers: '',
                        isActive: false,
                    };
                } else if ( state.currentResult === '' && state.firstNumber !== '' ) {
                    result = getResult( state.firstNumber,state.firstNumber,state.typeOfOperation );
                    return {
                        ...state,
                        currentResult: result,
                        currentNumbers: '',
                        isActive: false,
                    };
                } else if (  state.firstNumber !== '' && state.secondNumber !== '' && state.currentResult !== '' ) {
                    result = getResult( state.firstNumber,state.secondNumber,state.typeOfOperation );
                    return {
                        ...state,
                        currentResult: result,
                        currentNumbers: '',
                        isActive: false,
                    };
                } else {
                    if ( state.firstNumber === '' && state.secondNumber !== '' ) {
                        result = getResult( state.firstNumber,state.secondNumber,state.typeOfOperation );
                        return {
                            ...state,
                            currentResult: result,
                            currentNumbers: '',
                            isActive: false,
                        };
                    }
                    result = getResult( state.currentResult,state.currentResult,state.typeOfOperation );
                    return {
                        ...state,
                        currentResult: result,
                        currentNumbers: '',
                        isActive: false,
                    };
                }
            } else {
                if ( state.firstNumber !== '' && state.secondNumber === '' ) {
                    result = getResult( state.currentResult,state.firstNumber,state.typeOfOperation );
                    return {
                        ...state,
                        currentResult: result,
                        currentNumbers: '',
                        isActive: false,
                    };
                } else {
                    result = getResult( state.currentResult,state.secondNumber,state.typeOfOperation );
                    return {
                        ...state,
                        currentResult: result,
                        currentNumbers: '',
                        isActive: false,
                    };
                }
            }
        case 'clear':
            return {
                ...state,
                currentNumbers: '',
                firstNumber: '',
                secondNumber:'',
                currentResult:'',
                typeOfOperation: '',
                isActive: false,
            };
        case 'operation':
            if ( state.firstNumber !== '' && state.currentResult === '') {
                return {
                    ...state,
                    currentNumbers: '',
                    firstNumber: state.firstNumber,
                    secondNumber: '',
                    typeOfOperation: action.payload,
                    isActive: true,
                };
            } else if ( state.currentResult !== '' ) {
                return {
                    ...state,
                    currentNumbers: '',
                    firstNumber: state.currentResult,
                    secondNumber: '',
                    typeOfOperation: action.payload,
                    isActive: true,
                };
            } else if ( state.firstNumber === '' && state.secondNumber !== '' ) {

                return {
                    ...state,
                    firstNumber: state.currentNumbers,
                    currentNumbers: '',
                    secondNumber: '',
                    typeOfOperation: action.payload,
                    isActive: true,
                };
            } else {
                return {
                    ...state,
                    currentNumbers: '',
                    firstNumber: state.currentNumbers,
                    typeOfOperation: action.payload,
                    isActive: true,
                };
            }
        case 'percent':
            if ( state.firstNumber === '' ) {
                result = handlePercent( state.currentNumbers );
                return {
                    ...state,
                    currentNumbers: result,
                };
            } else if ( state.isActive && state.secondNumber !== '' ) {
                result = handlePercent( state.currentNumbers );
                return {
                    ...state,
                    secondNumber: result,
                    currentNumbers: result,
                };
             } else {
                result = handlePercent( state.currentResult );
                return {
                    ...state,
                    currentResult: result,
                };
            }

        case 'setNumber':
            if ( state.currentNumbers.length > 8 && !state.currentNumbers.includes('.') ) {return state;}
            if ( state.currentNumbers.length > 11 && (state.currentNumbers.includes('.') && state.currentNumbers.includes(',')) ) {return state;}
            if ( state.currentNumbers.length > 11 && state.currentNumbers.includes(',') ) {return state;}
            if ( state.currentNumbers.length > 10 && !state.currentNumbers.includes(',') ) {return state;}

            if ( action.payload.includes('0') && state.firstNumber === '' ) {
                if ( state.currentNumbers === '' ){
                    return state;
                } else {
                    result = state.currentNumbers + action.payload;
                    return {
                        ...state,
                        currentNumbers: result,
                    };
                }
            } else if ( action.payload.includes('.') ){

                if ( state.currentNumbers === '' ){
                    result = '0' + action.payload;
                    return {
                        ...state,
                        currentNumbers: result,
                    };
                } else if ( state.currentNumbers.includes('.') ) {
                    return {
                        ...state,
                    };
                } else {
                    result = state.currentNumbers + action.payload;
                    return {
                        ...state,
                        currentNumbers: result,
                    };
                }
            } else {

                if ( state.isActive ) {
                    result = state.currentNumbers + action.payload;
                    return {
                        ...state,
                        currentNumbers: result,
                        secondNumber: result,
                    };
                } else {
                    result = state.currentNumbers + action.payload;
                    return {
                        ...state,
                        currentNumbers: result,
                    };
                }
            }
            default:
                return state;
            }
};

