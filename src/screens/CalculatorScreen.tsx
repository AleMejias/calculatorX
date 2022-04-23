import React from 'react';
import { Text, View } from 'react-native';

import { colors, styles } from '../theme/CalculatorTheme';
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculatorScreen = () => {

    return (
        <View style={ styles.calculatorContainer }>
            <Text style={ styles.previousResult }>500</Text>
            <Text style={ styles.result }>1,500.000</Text>

            <View style={ styles.buttonContainer }>
                <CalculatorButton title="C" background={ colors.grayLight } textColor={ colors.black }/>
                <CalculatorButton title="+/-" background={ colors.grayLight } textColor={ colors.black }/>
                <CalculatorButton title="%" background={ colors.grayLight } textColor={ colors.black }/>
                <CalculatorButton title="÷" background={ colors.orange }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="7" />
                <CalculatorButton title="8" />
                <CalculatorButton title="9" />
                <CalculatorButton title="x" background={ colors.orange }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="4" />
                <CalculatorButton title="5" />
                <CalculatorButton title="6" />
                <CalculatorButton title="-" background={ colors.orange }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="1" />
                <CalculatorButton title="2" />
                <CalculatorButton title="3" />
                <CalculatorButton title="+" background={ colors.orange }/>
            </View>
            <View style={ styles.buttonContainer }>
                <CalculatorButton title="0" buttonLarge={ true }/>
                <CalculatorButton title="."/>
                <CalculatorButton title="=" background={ colors.orange }/>
            </View>
        </View>
    );
};
