import { View, Image } from 'react-native';

import logoheader from '../../assets/img/logo-header.png';

export function Header() {
  return (
    <View>
      <Image source={logoheader} style={{ width: 30, height: 30 }} />
    </View>
  );
}
