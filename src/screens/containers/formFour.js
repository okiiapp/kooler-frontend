import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { COLOR } from '../../utils/color';
import StylesGlobal from '../../utils/styles';

const FormFour = ({ navigation }) => {
  const [filePath, setfilePath] = useState({});

  const chooseFile = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        setfilePath(source);
      }
    });
  };

  return (
    <>
      <View style={stylesFormOne.containerOne}>
        <View>
          {/*<Image
          source={{ uri: this.state.filePath.path}}
          style={{width: 100, height: 100}} />*/}
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + filePath,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, height: 250 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.filePath.uri}
          </Text>
          <Button title="Choose File" onPress={chooseFile.bind(this)} />
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

export default FormFour;
