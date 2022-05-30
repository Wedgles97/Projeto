import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { UserName } from './style';

import logoheader from '../../assets/img/logo-header.png';

export function Header() {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image style={styles.Image} source={logoheader} />
        <Text style={styles.userNameText}> Usuario </Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.textButtonExit}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
