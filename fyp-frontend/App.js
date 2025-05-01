import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    axios.get('http://<YOUR-IP>:8000/api/test/')
      .then(res => setMsg(res.data.message))
      .catch(err => setMsg('Error connecting to backend'));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
});
s