import { Inter_200ExtraLight } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: 'flex-end'
  },
  container: {
    width: '100%',
    height: 174,
    backgroundColor: theme.colors.secondary80,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  outlineButton: {
    width: '100%',
    height: 56,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    width: '40%',
    height: 56,
    backgroundColor: 'transparent',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  okButton: {
    width: '40%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: theme.fonts.title500,
    fontSize: 18,
    color: theme.colors.heading,
    textAlign: 'center'
  }
})