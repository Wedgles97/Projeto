import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#709fb0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  form: {
    width: '100%',
  },
  field: {
    width: '100%',
  },
  /* Label do FORM */
  textLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  inputText: {
    width: '100%',
    height: 40,
    backgroundColor: '#c8c8c899',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  btnRegister: {
    width: '100%',
    height: 40,
    backgroundColor: '#222831',
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
});
