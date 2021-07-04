import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 360,
    resizeMode: 'stretch',
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
  }
});