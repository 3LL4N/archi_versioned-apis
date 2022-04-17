import React, { useEffect, useState } from 'react';
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

interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

export default function App() {

  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch(backendUrl('people'))
    .then((response) => response.json())
    .then(setPeople)
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <View style={styles.container}>
      {
        people.map((person) => (
          <Text>
            {person.id}
            {' - '}
            {`${person.lastName}, ${person.firstName}`}
          </Text>
        ))
      }
      { /* eslint-disable-next-line react/style-prop-object */ }
      <StatusBar style="auto" />
    </View>
  );
}


