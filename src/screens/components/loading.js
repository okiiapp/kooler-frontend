import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const Loading = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);

  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require('../assets/logo.png')} /> */}
      <Text style={styles.title}>Kooler</Text>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    color: '#9aa9b9',
    fontSize: 24,
    fontWeight: 'normal',
    marginBottom: 10,
  },
});

export default Loading;
