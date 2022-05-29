import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { UserName } from './style';

import logoheader from '../../assets/img/logo-header.png';

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.Image} source={logoheader} />
      <Text style={styles.userNameText}> Usuario </Text>
      <TouchableOpacity
        style={{
          flex: 1,
          width: 100,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#c8c8c899',
        }}
      >
        <Text style={styles.textButtonExit}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 20,
    backgroundColor: '#709fb0',
    borderBottomWidth: 2,
    borderBottomColor: '#222831',
  },
  Image: {
    width: 30,
    height: 30,
  },
  userNameText: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textButtonExit: {
    fontSize: 20,
    color: '#222831',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
});
