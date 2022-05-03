
import React, { useReducer } from 'react';
import { Text, View } from 'react-native';

import { colors, styles } from '../theme/CalculatorTheme';
import { CalculatorButton } from '../components/CalculatorButton';
import { CalculatorState } from '../interfaces/ButtonsInterface';
import { handlePointAndComma } from '../helpers/handlePointAndComma';
import { changeToPositiveOrNegative } from '../helpers/changeToPositiveOrNegative';



type Actions =
| { type: 'clear' }
| { type: 'setNumber', payload: string }
| { type: 'changeToPositiveOrNegative' , payload: string }
| { type: 'operation' , payload:string }
| { type: 'calculate' };



const initialValue : CalculatorState = {
    currentNumbers:'',
    currentResult:'',
    firstNumber: '',
    secondNumber: '',
    typeOfOperation: '',
    isActive:false,
};

/* const handleOperations = ( firtsNumber:string , secondNumber:string, operatorType:string):string => {

    let result:number = 0;
    if ( operatorType === '+' ) {
         result = parseFloat( firtsNumber ) + parseFloat( secondNumber );
    }

    return result.toString();
}; */

const getResult = ( firstNumber:string , secondNumber:string ,operationType:string):string => {
    let result:number = 0;
    if ( operationType === '+' ) {
        result = Number(firstNumber) + Number(secondNumber);
    } else if ( operationType === '-' ) {
        result = Number(firstNumber) - Number(secondNumber);
    } else if ( operationType === 'x') {
        result = Number(firstNumber) * Number(secondNumber);
        console.log(`Operacion: ${ firstNumber } * ${ secondNumber } , resultado: ${ result }`);
    } else if ( operationType === '/' ) {
        result = Number(firstNumber) / Number(secondNumber);
        console.log(`Rersultado de la division: ${ result }`);
    }
    return result.toString();
};

const calculatorReducer = ( state:CalculatorState, action:Actions ) => {
    let result:string = '';
    switch ( action.type ) {
        case 'changeToPositiveOrNegative':
            return {
                ...state,
                currentNumbers: changeToPositiveOrNegative(state.currentNumbers),
            };
        case 'calculate':
            if ( state.isActive ) {
                if ( state.firstNumber !== '' && state.secondNumber !== '' && state.currentResult === '' ) {
                    console.log('entro a isACtive, al primer if de todo');
                    result = getResult( state.firstNumber,state.secondNumber,state.typeOfOperation );
                    return {
                        ...state,
                        currentResult: result,
                        currentNumbers: '',
                        isActive: false,
                    };
                } else if ( state.currentResult === '' ) {
                    console.log('entro a isACtive, al primer if else');
                    result = getResult( state.firstNumber,state.firstNumber,state.typeOfOperation );
                    return {
                        ...state,
                        currentResult: result,
                        currentNumbers: '',
                        isActive: false,
                    };
                } else if (  state.firstNumber !== '' && state.secondNumber !== '' && state.currentResult !== '' ) {
                    console.log('entro a isACtive, al primer if de todo');
                    result = getResult( state.firstNumber,state.secondNumber,state.typeOfOperation );
                    return {
                        ...state,
                        currentResult: result,
                        currentNumbers: '',
                        isActive: false,
                    };
                } else {
                    console.log('entro a isACtive, al else');
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
                    console.log('entre al ELSE, primer if');
                    result = getResult( state.currentResult,state.firstNumber,state.typeOfOperation );
                    return {
                        ...state,
                        currentResult: result,
                        currentNumbers: '',
                        isActive: false,
                    };
                } else {
                    console.log('entre al else, ELSE');
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
                    firstNumber: state.typeOfOperation + state.currentNumbers,
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

        case 'setNumber':
            if ( state.currentNumbers.length > 8 && !state.currentNumbers.includes('.') ) {return state;}
            if ( state.currentNumbers.length > 11 && (state.currentNumbers.includes('.') && state.currentNumbers.includes(',')) ) {return state;}
            if ( state.currentNumbers.length > 11 && state.currentNumbers.includes(',') ) {return state;}
            if ( state.currentNumbers.length > 10 && !state.currentNumbers.includes(',') ) {return state;}

            if ( action.payload.includes('0') && state.firstNumber === '' ) {
                if ( state.currentNumbers === '' ){
                    return state;
                } else {
                    // result = handlePointAndComma(state.currentNumbers + action.payload);
                    result = state.currentNumbers + action.payload;
                    return {
                        ...state,
                        currentNumbers: result,
                    };
                }
            } else if ( action.payload.includes('.') ){

                if ( state.currentNumbers === '' ){
                    // result = handlePointAndComma('0' + action.payload);
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
                    // result = handlePointAndComma(state.currentNumbers + action.payload);
                    result = state.currentNumbers + action.payload;
                    return {
                        ...state,
                        currentNumbers: result,
                    };
                }
            } else {

                if ( state.isActive ) {
                    // result = handlePointAndComma(state.currentNumbers + action.payload);
                    result = state.currentNumbers + action.payload;
                    return {
                        ...state,
                        currentNumbers: result,
                        secondNumber: result,
                    };
                } else {
                    // result = handlePointAndComma(state.currentNumbers + action.payload);
                    result = state.currentNumbers + action.payload;
                    return {
                        ...state,
                        currentNumbers: result,
                        // firstNumber: result ,
                    };
                }
            }
            default:
                return state;
            }
};
export const CalculatorScreen = () => {


    const [ state , dispatch ] = useReducer( calculatorReducer,initialValue );
    let currentR:string = '';
    console.log(state);
    if ( state.currentResult === 'Infinity' ) {
        currentR = 'Error';
    } else if ( state.currentResult.includes('+') || state.currentResult.length > 9 ) {
        currentR = handlePointAndComma( state.currentResult , state.typeOfOperation );
        console.log(`Numero recibido en el primer ELSE IF${currentR}`);
    } else if ( state.currentResult.includes('.') ) {
        currentR =  handlePointAndComma( state.currentResult.replace('.',','), state.typeOfOperation);
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
        console.log('no entro al else!!');
        currentR = handlePointAndComma( state.currentResult , state.typeOfOperation);
    }

    return (
        <View style={ styles.calculatorContainer }>
            <View style={ styles.resultContainer }>
                <Text
                    style={ styles.result }
                    numberOfLines={ 1 }
                    adjustsFontSizeToFit={ true }
                >
                    {
                        currentR
                    }
                </Text>
            </View>

            <View style={ styles.buttonContainer }>
                <CalculatorButton title="C" background={ colors.grayLight } textColor={ colors.black } dispatch={ () => dispatch({type:'clear'}) }/>
                <CalculatorButton title="+/-" background={ colors.grayLight } textColor={ colors.black } dispatch={ () => dispatch({type:'changeToPositiveOrNegative',payload:currentR}) }/>
                <CalculatorButton title="%" background={ colors.grayLight } textColor={ colors.black } />
                <CalculatorButton title="÷" background={ colors.orange }  dispatch={ () => dispatch({type:'operation', payload:'/'}) }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="7" dispatch={ () => dispatch({type:'setNumber', payload:'7'}) }/>
                <CalculatorButton title="8" dispatch={ () => dispatch({type:'setNumber', payload:'8'}) }/>
                <CalculatorButton title="9" dispatch={ () => dispatch({type:'setNumber', payload:'9'}) }/>
                <CalculatorButton title="x" background={ colors.orange } dispatch={ () => dispatch({type:'operation', payload:'x'}) }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="4" dispatch={ () => dispatch({type:'setNumber', payload:'4'}) }/>
                <CalculatorButton title="5" dispatch={ () => dispatch({type:'setNumber', payload:'5'}) }/>
                <CalculatorButton title="6" dispatch={ () => dispatch({type:'setNumber', payload:'6'}) }/>
                <CalculatorButton title="-" background={ colors.orange } dispatch={ () => dispatch({type:'operation', payload:'-'}) }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="1" dispatch={ () => dispatch({type:'setNumber', payload:'1'}) }/>
                <CalculatorButton title="2" dispatch={ () => dispatch({type:'setNumber', payload:'2'}) }/>
                <CalculatorButton title="3" dispatch={ () => dispatch({type:'setNumber', payload:'3'}) }/>
                <CalculatorButton title="+" background={ colors.orange } dispatch={ () => dispatch({type:'operation', payload:'+'}) }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="0" buttonLarge={ true } dispatch={ () => dispatch({type:'setNumber', payload:'0'}) }/>
                <CalculatorButton title="," dispatch={ () => dispatch({type:'setNumber', payload:'.'})}/>
                <CalculatorButton title="=" background={ colors.orange } dispatch={ () => dispatch({type:'calculate'}) }/>
            </View>
        </View>
    );
};
