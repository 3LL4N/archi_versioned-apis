import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


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
    
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! hehe lol</Text>
      <StatusBar style="auto" />
    </View>
  );
}


