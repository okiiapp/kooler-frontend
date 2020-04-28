import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import appleAuth, {
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from '@invertase/react-native-apple-authentication';

async function onFacebookButtonPress() {
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );
  return auth().signInWithCredential(facebookCredential);
}

async function onGoogleButtonPress() {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}

async function onAppleButtonPress() {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [
      AppleAuthRequestScope.EMAIL,
      AppleAuthRequestScope.FULL_NAME,
    ],
  });

  if (!appleAuthRequestResponse.identityToken) {
    throw 'Apple Sign-In failed - no identify token returned';
  }

  const { identityToken, nonce } = appleAuthRequestResponse;
  const appleCredential = auth.AppleAuthProvider.credential(
    identityToken,
    nonce,
  );

  return auth().signInWithCredential(appleCredential);
}

class Login extends Component {
  handleLogin = () => {
    this.props.navigation.navigate('FormOne');
  };

  render() {
    return (
      <View style={stylesLogin.container}>
        <View style={stylesLogin.containerLogo}>
          <Text>Logo</Text>
        </View>
        {appleAuth.isSupported && (
          <AppleButton
            style={stylesLogin.buttonApple}
            cornerRadius={23}
            buttonStyle={AppleButton.Style.WHITE}
            buttonType={AppleButton.Type.SIGN_IN}
            onPress={() => onAppleButtonPress()}
          />
        )}
        <View style={stylesLogin.button}>
          <ImageBackground
            source={require('../../assets/Login_facebook_y_gmail.png')}
            style={stylesLogin.image}
            imageStyle={stylesLogin.imageStyleBg}>
            <Button
              style={stylesLogin.button}
              title="Login with Facebook"
              color="#fff"
              onPress={this.handleLogin}
              // onFacebookButtonPress().then(
              //   console.log('Signed in with Facebook!'),
              // )
            />
          </ImageBackground>
        </View>
        <View style={stylesLogin.button}>
          <ImageBackground
            source={require('../../assets/Login_facebook_y_gmail.png')}
            style={stylesLogin.image}
            imageStyle={stylesLogin.imageStyleBg}>
            <Button
              title="Login with Google"
              color="#fff"
              onPress={() =>
                onGoogleButtonPress().then(
                  this.handlePress,
                  console.log('Signed in with Google!'),
                )
              }
            />
          </ImageBackground>
        </View>
        <Text style={stylesLogin.containerTitle}>
          By registering, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    );
  }
}

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerLogo: {
    marginBottom: 80,
  },
  image: {
    resizeMode: 'cover',
    marginBottom: 20,
  },
  imageStyleBg: {
    borderRadius: 50,
    overflow: 'hidden',
    height: 45,
  },
  buttonApple: {
    width: 300,
    height: 45,
    color: '#fff',
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 23,
    borderColor: '#000',
    marginBottom: 15,
  },
  button: {
    width: 300,
    color: 'white',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  containerTitle: {
    width: 210,
    marginTop: 16,
    fontSize: 12,
    paddingVertical: 8,
    color: 'grey',
    textAlign: 'center',
  },
});

export default Login;
