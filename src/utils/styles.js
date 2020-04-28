import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerGlobal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomView: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  containerButton: {
    height: 45,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    borderRadius: 30,
  },
  textContinue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
});
