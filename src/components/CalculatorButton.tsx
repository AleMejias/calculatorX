
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
    dispatch,
    currentButtonActive,
    isActive,
    blockButton }:Button ) => {

    let currentStyles = (currentButtonActive === title && isActive ) ? { background:`${colors.white}`,color:`${colors.orange}` } : { background:`${background}`,color:`${textColor}` };

    return (

        <TouchableOpacity
            onPress = { dispatch }
            activeOpacity={0.8}
            disabled={ blockButton }
            style={{
                ...styles.button,
                backgroundColor: currentStyles.background,
                width: buttonLarge  ? 158 : 70 ,
            }}>
            <Text style={{
                ...styles.buttonText,
                color:currentStyles.color,
            }}>{ title }
            </Text>
        </TouchableOpacity>
    );
};
