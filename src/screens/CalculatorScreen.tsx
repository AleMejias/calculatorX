
import React, { useReducer } from 'react';
import { Text, View } from 'react-native';

import { colors, styles } from '../theme/CalculatorTheme';

import { CalculatorButton } from '../components/CalculatorButton';
import { calculatorReducer , initialValue} from '../reducer/calculatorReducer';
import { handleScreenView } from '../helpers/handleScreenView';




export const CalculatorScreen = () => {


    const [ state , dispatch ] = useReducer( calculatorReducer,initialValue );
    let currentR:string = handleScreenView( state );
    console.log(state);
/*     if ( state.currentResult === 'Infinity' ) {
        currentR = 'Error';
    } else if ( state.currentResult.includes('+') || state.currentResult.length > 9 ) {
        if ( state.isActive && state.firstNumber !== '' && state.secondNumber !== '' ) {
            currentR = state.secondNumber;
        } else if ( state.currentResult.includes('.') ) {
            currentR = Number(state.currentResult).toFixed(2).toString();
        } else {
            currentR = handlePointAndComma( state.currentResult , state.typeOfOperation );
        }
    } else if ( state.currentResult.includes('.') ) {
        console.log('creo que entra aqui!');
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
        console.log('no entro al else!!');
        currentR = handlePointAndComma( state.currentResult , state.typeOfOperation);
    } */

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
                <CalculatorButton title="AC" background={ colors.grayLight } textColor={ colors.black } dispatch={ () => dispatch({type:'clear'}) }/>
                <CalculatorButton title="+/-" background={ colors.grayLight } textColor={ colors.black } dispatch={ () => dispatch({type:'changeToPositiveOrNegative',payload:currentR}) }/>
                <CalculatorButton title="%" background={ colors.grayLight } textColor={ colors.black } dispatch={ () => dispatch({type:'percent',payload:currentR}) }/>
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
