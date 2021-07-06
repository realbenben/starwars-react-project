import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import { Card, Title} from 'react-native-paper';

const LoginScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
    <Card.Content>
      <Title style={styles.title}> Welcome to the starport</Title>
    </Card.Content>
  </Card>

  <View>
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
    </View>
    <View>
    <TextInput
      label="password"
      value={text}
      onChangeText={text => setText(text)}
/>
</View>
<View>
  <Button  mode="outlined" onPress={() => console.log('Pressed')}>
    s'enregistrer
  </Button>
</View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "white"
  },
  title: {
    marginTop: 16,
    paddingVertical: 18,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "white",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
export default LoginScreen;

