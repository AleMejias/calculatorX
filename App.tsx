import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { styles } from './src/theme/CalculatorTheme';

import { CalculatorScreen } from './src/screens/CalculatorScreen';

export const App = () => {
  return (
    <SafeAreaView style={ styles.safeView }>
      <StatusBar
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};
