import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'dotenv/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {

  useEffect(() => {
    fetch('http://localhost:8000')
  }, []);

  return (
    <View style={styles.container}>
      <Text>{process.env.BACKEND_URL}</Text>
      <StatusBar style="auto" />
    </View>
  );
}


