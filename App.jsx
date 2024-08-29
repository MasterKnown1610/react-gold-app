import { Image, Text, View } from 'react-native';
import React from 'react';
import GoldLogic from './components/GoldLogic';
import PurityCalculatorScreen from './components/PurityCalculator';
import PurityGeneratorScreen from './components/PurityGenerator';
import PurityConverterScreen from './components/PurityConverter';
import GoldConverter from './components/GoldConverter';
import LogoImage from './components/assets/Picture.png'; 
import { enableScreens } from 'react-native-screens';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F8C24D',
            height: 100,
          },
          headerTintColor: 'black',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="MasterKnownGold"
          component={GoldLogic}
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={LogoImage}
                  style={{
                    width: 60,
                    height: 60,
                    marginRight: 5,
                  }}
                />
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}> {/* Use 'style' not 'styles' */}
                  MASTER KNOWN GOLD
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen name="Gold Converter" component={GoldConverter} />
        <Stack.Screen name="Purity Converter" component={PurityConverterScreen} />
        <Stack.Screen name="Purity Calculator" component={PurityCalculatorScreen} />
        <Stack.Screen name="Purity Generator" component={PurityGeneratorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

