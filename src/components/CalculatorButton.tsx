
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors, styles } from '../theme/CalculatorTheme';

import { Button  } from '../interfaces/ButtonsInterface';

export const CalculatorButton = ( {
    title,
    background = colors.grayDark,
    textColor = colors.white,
    buttonLarge = false,
    dispatch }:Button ) => {
    return (

        <TouchableOpacity
            onPress = { dispatch }
            activeOpacity={0.8}
            style={{
                ...styles.button,
                backgroundColor: background,
                width: buttonLarge  ? 158 : 70 ,
            }}>
            <Text style={{
                ...styles.buttonText,
                color:textColor,
            }}>{ title }</Text>
        </TouchableOpacity>
    );
};
