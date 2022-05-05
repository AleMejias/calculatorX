import React, { useReducer } from 'react';
import { Text, View } from 'react-native';

import { colors, styles } from '../theme/CalculatorTheme';

import { CalculatorButton } from '../components/CalculatorButton';
import { calculatorReducer , initialValue  } from '../reducer/calculatorReducer';
import { handleScreenView } from '../helpers/handleScreenView';




export const CalculatorScreen = () => {


    const [ state , dispatch ] = useReducer( calculatorReducer,initialValue );
    let currentR:string = handleScreenView( state );
    let blockButton:boolean = currentR === 'Error' ? true : false;

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
                <CalculatorButton blockButton={ blockButton } title="+/-" background={ colors.grayLight } textColor={ colors.black } dispatch={ () => dispatch({type:'changeToPositiveOrNegative',payload:currentR}) }/>
                <CalculatorButton blockButton={ blockButton } title="%" background={ colors.grayLight } textColor={ colors.black } dispatch={ () => dispatch({type:'percent',payload:currentR}) }/>
                <CalculatorButton blockButton={ blockButton } title="÷" isActive={ state.isActive } currentButtonActive={ state.typeOfOperation }  background={ colors.orange } dispatch={ () => dispatch({type:'operation', payload:'÷'}) }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton blockButton={ blockButton } title="7" dispatch={ () => dispatch({type:'setNumber', payload:'7'}) }/>
                <CalculatorButton blockButton={ blockButton } title="8" dispatch={ () => dispatch({type:'setNumber', payload:'8'}) }/>
                <CalculatorButton blockButton={ blockButton } title="9" dispatch={ () => dispatch({type:'setNumber', payload:'9'}) }/>
                <CalculatorButton blockButton={ blockButton } title="x" isActive={ state.isActive } currentButtonActive={ state.typeOfOperation }  background={ colors.orange } dispatch={ () => dispatch({type:'operation', payload:'x'}) }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton blockButton={ blockButton } title="4" dispatch={ () => dispatch({type:'setNumber', payload:'4'}) }/>
                <CalculatorButton blockButton={ blockButton } title="5" dispatch={ () => dispatch({type:'setNumber', payload:'5'}) }/>
                <CalculatorButton blockButton={ blockButton } title="6" dispatch={ () => dispatch({type:'setNumber', payload:'6'}) }/>
                <CalculatorButton blockButton={ blockButton } title="-" isActive={ state.isActive } currentButtonActive={ state.typeOfOperation }  background={ colors.orange } dispatch={ () => dispatch({type:'operation', payload:'-'}) }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton blockButton={ blockButton } title="1" dispatch={ () => dispatch({type:'setNumber', payload:'1'}) }/>
                <CalculatorButton blockButton={ blockButton } title="2" dispatch={ () => dispatch({type:'setNumber', payload:'2'}) }/>
                <CalculatorButton blockButton={ blockButton } title="3" dispatch={ () => dispatch({type:'setNumber', payload:'3'}) }/>
                <CalculatorButton blockButton={ blockButton } title="+" isActive={ state.isActive } currentButtonActive={ state.typeOfOperation }  background={ colors.orange } dispatch={ () => dispatch({type:'operation', payload:'+'}) }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton blockButton={ blockButton } title="0" buttonLarge={ true } dispatch={ () => dispatch({type:'setNumber', payload:'0'}) }/>
                <CalculatorButton blockButton={ blockButton } title="," dispatch={ () => dispatch({type:'setNumber', payload:'.'})}/>
                <CalculatorButton blockButton={ blockButton } title="=" background={ colors.orange } dispatch={ () => dispatch({type:'calculate'}) }/>
            </View>
        </View>
    );
};
