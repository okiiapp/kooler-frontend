import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/index';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <RootStack />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
