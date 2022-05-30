import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export function CadProduct() {
  const [nameProd, setNameProd] = useState('');
  const [descriptionProd, setDescriptionProd] = useState('');
  const [valueProd, setValueProd] = useState('');

  const cadastro = () => {
    // alert('Produto Cadastrado');
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Text style={styles.title}>Cadastrar Produto</Text>

      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.textLabel}>Nome do Produto:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Ex: Produto 1"
            onChangeText={setNameProd}
            value={nameProd}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.textLabel}>Descrição do Produto:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Ex: Produto para tarara tarara"
            onChangeText={setDescriptionProd}
            value={descriptionProd}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.textLabel}>Valor R$:</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setValueProd}
            value={valueProd}
            placeholder="Ex: R$ 10,00"
            keyboardType="numeric"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btnRegister} onPress={() => cadastro()}>
        <Text
          style={{
            color: '#f5f5f5',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          CADASTRAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}
