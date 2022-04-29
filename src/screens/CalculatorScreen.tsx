
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
    firstNumber: '0',
    secondNumber: '0',
    typeOfOperation: '',
    lastOperation: '',
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
    }
/*     if ( state.secondNumber !== '' ) {

        if ( state.typeOfOperation === '') {
            result = Number( state.firstNumber ) + Number( state.currentResult );
            // console.log(`El resultado entre ${state.firstNumber} y ${state.secondNumber} es : ${result}`);
        } else if ( state.currentResult !== '' ) {
            result = Number(state.currentResult) + Number(state.secondNumber);
        } else {
            result = Number(state.firstNumber) + Number(state.secondNumber);
        }

    } */
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

            if ( state.firstNumber !== '' && state.secondNumber !== '' && state.currentResult === '' ) {
                result = getResult( state.firstNumber, state.secondNumber ,state.typeOfOperation );
                return {
                    ...state,
                    currentResult:result,
                    isActive: false,
                };
            } else if ( state.firstNumber !== '' && state.secondNumber !== '' && state.currentResult !== '' ) {
                result = getResult( state.currentResult, state.secondNumber ,state.typeOfOperation );
                return {
                    ...state,
                    currentResult:result,
                    isActive: false,
                };
            } else if ( state.firstNumber !== '' && state.currentResult === ''  )  {
                result = getResult( state.firstNumber ,state.firstNumber,state.typeOfOperation );
                return {
                    ...state,
                    currentResult:result,
                    isActive: false,
                };
            } else if ( state.firstNumber !== '' && state.secondNumber === '' ) {
                result = getResult( state.currentResult ,state.firstNumber,state.typeOfOperation );
                return {
                    ...state,
                    currentResult:result,
                    isActive: false,
                };
            } else {
                result = getResult( state.firstNumber, state.currentResult ,state.typeOfOperation );
                return {
                    ...state,
                    currentResult:result,
                    isActive: false,
                };
            }
        case 'clear':
            return {
                ...state,
                currentNumbers: '',
                firstNumber: '',
                secondNumber:'',
                currentResult:'',
                typeOfOperation: '',
                lastOperation: '',
                isActive: false,

            };
        case 'operation':
            return {
                ...state,
                currentNumbers: '',
                firstNumber: state.currentNumbers,
                secondNumber: '',
                typeOfOperation: action.payload,
                isActive: true,
            };

        case 'setNumber':
            if ( state.currentNumbers.length > 9 && !state.currentNumbers.includes('.') ) {return state;}
            if ( state.currentNumbers.length > 11 && (state.currentNumbers.includes('.') && state.currentNumbers.includes(',')) ) {return state;}
            if ( state.currentNumbers.length > 11 && state.currentNumbers.includes(',') ) {return state;}
            if ( state.currentNumbers.length > 10 && !state.currentNumbers.includes(',') ) {return state;}

            if ( action.payload.includes('0') && state.firstNumber === '' ) {
                if ( state.currentNumbers === '' ){
                    return state;
                } else {
                    result = handlePointAndComma(state.currentNumbers + action.payload);
                    return {
                        ...state,
                        currentNumbers: result,
                    };
                }
            } else if ( action.payload.includes(',') ){

                if ( state.currentNumbers === '' ){
                    result = handlePointAndComma('0' + action.payload);
                    return {
                        ...state,
                        currentNumbers: result,
                    };
                } else {
                    result = handlePointAndComma(state.currentNumbers + action.payload);
                    return {
                        ...state,
                        currentNumbers: result,
                    };
                }
            } else {

                if ( state.isActive ) {
                    result = handlePointAndComma(state.currentNumbers + action.payload);
                    return {
                        ...state,
                        currentNumbers: result,
                        secondNumber: result,
                    };
                } else {
                    result = handlePointAndComma(state.currentNumbers + action.payload);
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
    let currentR = (state.currentNumbers === '' ? '0' : state.currentNumbers);

    console.log(state);
    return (
        <View style={ styles.calculatorContainer }>
            <View style={ styles.resultContainer }>
                <Text
                    style={ styles.result }
                    numberOfLines={ 1 }
                    adjustsFontSizeToFit={ true }
                >
                    {
                        state.currentResult === '' ? currentR : state.currentResult
                    }
                </Text>
            </View>

            <View style={ styles.buttonContainer }>
                <CalculatorButton title="C" background={ colors.grayLight } textColor={ colors.black } dispatch={ () => dispatch({type:'clear'}) }/>
                <CalculatorButton title="+/-" background={ colors.grayLight } textColor={ colors.black } dispatch={ () => dispatch({type:'changeToPositiveOrNegative',payload:currentR}) }/>
                <CalculatorButton title="%" background={ colors.grayLight } textColor={ colors.black } />
                <CalculatorButton title="÷" background={ colors.orange } />
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="7" dispatch={ () => dispatch({type:'setNumber', payload:'7'}) }/>
                <CalculatorButton title="8" dispatch={ () => dispatch({type:'setNumber', payload:'8'}) }/>
                <CalculatorButton title="9" dispatch={ () => dispatch({type:'setNumber', payload:'9'}) }/>
                <CalculatorButton title="x" background={ colors.orange } />
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="4" dispatch={ () => dispatch({type:'setNumber', payload:'4'}) }/>
                <CalculatorButton title="5" dispatch={ () => dispatch({type:'setNumber', payload:'5'}) }/>
                <CalculatorButton title="6" dispatch={ () => dispatch({type:'setNumber', payload:'6'}) }/>
                <CalculatorButton title="-" background={ colors.orange } />
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="1" dispatch={ () => dispatch({type:'setNumber', payload:'1'}) }/>
                <CalculatorButton title="2" dispatch={ () => dispatch({type:'setNumber', payload:'2'}) }/>
                <CalculatorButton title="3" dispatch={ () => dispatch({type:'setNumber', payload:'3'}) }/>
                <CalculatorButton title="+" background={ colors.orange } dispatch={ () => !state.isActive ? dispatch({type:'operation', payload:'+'}) : ''}/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="0" buttonLarge={ true } dispatch={ () => dispatch({type:'setNumber', payload:'0'}) }/>
                <CalculatorButton title="," dispatch={ () => dispatch({type:'setNumber', payload:','})}/>
                <CalculatorButton title="=" background={ colors.orange } dispatch={ () => dispatch({type:'calculate'}) }/>
            </View>
        </View>
    );
};
