
import React, { useReducer } from 'react';
import { Text, View } from 'react-native';

import { colors, styles } from '../theme/CalculatorTheme';
import { CalculatorButton } from '../components/CalculatorButton';
import { CalculatorState } from '../interfaces/ButtonsInterface';
import { addPoint } from '../helpers/addPoint';


type Actions =
| { type: 'clear' }
| { type: 'setNumber', payload: string };



const initialValue : CalculatorState = {
    currentNumbers:'',
    previousResult:'',
    currentResult:'',
    numberWithComma: '',
    numberWithOutComma: '',
};



const calculatorReducer = ( state:CalculatorState, action:Actions ) => {

    switch ( action.type ) {
        case 'clear':
            return {
                ...state,
                currentNumbers: '',
            };
        case 'setNumber':
            // if ( state.currentNumbers.length > 10 ) {return state;}
            // if ( state.currentNumbers.length > 9 && !state.currentNumbers.includes(',') ) {return state;}
            if ( action.payload.includes('0') ) {
                if ( state.currentNumbers === '' ){
                    return state;
                } else {
                    return {
                        ...state,
                        currentNumbers: addPoint(state.currentNumbers + action.payload),
                    };
                }
            } else if ( action.payload.includes(',') ){

                if ( state.currentNumbers === '' ){
                    return {
                        ...state,
                        currentNumbers: addPoint('0' + action.payload),
                    };
                } else {
                    return {
                        ...state,
                        currentNumbers: addPoint(state.currentNumbers + action.payload),
                    };
                }
            } else {
                return {
                    ...state,
                    currentNumbers: addPoint(state.currentNumbers + action.payload),
                };
            }
            default:
                return state;
            }
};
export const CalculatorScreen = () => {


    const [ state , dispatch ] = useReducer( calculatorReducer,initialValue );

    let previuosR = (state.previousResult === '' ? '0' : state.previousResult);
    let currentR = (state.currentNumbers === '' ? '0' : state.currentNumbers);
    return (
        <View style={ styles.calculatorContainer }>
            <View style={ styles.resultContainer }>
                {
                   state.currentResult !== '0' ? <Text style={ styles.previousResult }>{ previuosR }</Text> : null
                   /*{  }  */
                }
                <Text
                    style={ styles.result }
                    numberOfLines={ 1 }
                    adjustsFontSizeToFit={ true }
                >
                    {/* { state.currentNumbers.length > 3 ? addPoint( currentR.replace('.','') ) : currentR } */
                        currentR
                    }
                </Text>
            </View>

            <View style={ styles.buttonContainer }>
                <CalculatorButton title="C" background={ colors.grayLight } textColor={ colors.black } dispatch={ () => dispatch({type:'clear'}) }/>
                <CalculatorButton title="+/-" background={ colors.grayLight } textColor={ colors.black } />
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
                <CalculatorButton title="+" background={ colors.orange } />
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="0" buttonLarge={ true } dispatch={ () => dispatch({type:'setNumber', payload:'0'}) }/>
                <CalculatorButton title="," dispatch={ () => dispatch({type:'setNumber', payload:','})}/>
                <CalculatorButton title="=" background={ colors.orange } />
            </View>
        </View>
    );
};
