import { useState } from 'react';
import { TextInput, Text, TouchableOpacity } from 'react-native';

import { Container, Title } from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <Title style={{ textAlign: 'center', paddingTop: 80 }}>Login</Title>

      <TextInput
        style={{
          height: 40,
          borderColor: '#f5f5f5',
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderRadius: 5,
        }}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        returnKeyType="next"
        placeholderTextColor="#f5f5f5"
      />

      <TextInput
        style={{
          height: 40,
          borderColor: '#f5f5f5',
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderRadius: 5,
        }}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        returnKeyType="send"
        placeholderTextColor="#f5f5f5"
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#c8c8c8',
          marginVertical: 20,
          marginHorizontal: 10,
          padding: 10,
        }}
      >
        <Text style={{ textAlign: 'center' }}>Send</Text>
      </TouchableOpacity>
    </Container>
  );
}
