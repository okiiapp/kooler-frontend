import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { COLOR } from '../../utils/color';
import StylesGlobal from '../../utils/styles';

const FormThree = ({ navigation }) => {
  const [firstName, setfirstName] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);

  const handleChange = (text) => {
    setfirstName(text);
    setDisabledButton(false);
  };

  const blueColor = COLOR.blue;
  return (
    <>
      <View style={StylesGlobal.containerGlobal}>
        <TextInput
          style={stylesFormOne.containerInput}
          placeholder="image"
          placeholderTextColor={blueColor}
          onChangeText={(text) => handleChange(text)}
          value={firstName}
        />
        <Text
          style={stylesFormOne.laterText}
          onPress={() => {
            navigation.navigate('FormFour');
          }}>
          You cannot change this later
        </Text>

        <View style={StylesGlobal.bottomView}>
          <ImageBackground
            source={require('../../assets/Login_facebook_y_gmail.png')}
            style={StylesGlobal.image}
            imageStyle={StylesGlobal.imageStyleBg}>
            <TouchableOpacity
              disabled={disabledButton}
              style={StylesGlobal.containerButton}
              onPress={() => {
                navigation.navigate('FormFour', {
                  firstName,
                });
              }}>
              <Text style={StylesGlobal.textContinue}>Continue</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

const stylesFormOne = StyleSheet.create({
  containerOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerInput: {
    width: 300,
    height: 40,
    color: COLOR.blue,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    borderBottomColor: COLOR.blue,
    borderBottomWidth: 1,
  },
  laterText: {
    marginTop: 40,
    color: COLOR.grey,
    fontSize: 18,
  },
});

export default FormThree;
