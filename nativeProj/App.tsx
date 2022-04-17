import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function backendUrl(path: string) {
  return `${Constants.manifest?.extra?.backendUrl}/${path}`;
}

export default function App() {

  useEffect(() => {
    fetch(backendUrl('people'))
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text>{Constants.manifest?.extra?.backendUrl}</Text>
      <StatusBar style="auto" />
    </View>
  );
}


