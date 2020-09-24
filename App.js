import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './src/navigation/Main';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Main />
    </SafeAreaView>
  );
}
