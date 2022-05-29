import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { styles } from './style';

export function CadProduct() {
  const [nameProd, setNameProd] = useState('');
  const [descriptionProd, setDescriptionProd] = useState('');
  const [valueProd, setValueProd] = useState('R$ ');

  const cadastro = () => {
    alert('Produto Cadastrado');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.textCad}>Cadastrar Produto</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Nome do produto"
        onChangeText={setNameProd}
        value={nameProd}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Descrição do Produto"
        onChangeText={setDescriptionProd}
        value={descriptionProd}
      />
      <TextInput
        style={styles.inputText}
        onChangeText={setValueProd}
        value={valueProd}
        placeholder="Digite o valor do produto"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.btnRegister} onPress={() => cadastro()}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
