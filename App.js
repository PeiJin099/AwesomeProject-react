import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header'; 

// View -> UIView
export default function App() {
  
  return (
    <View style={styles.container}>
    <Header/>
    <CarsList/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carcontainer: {
    width: '100%',
    height:'100%',
  },
  titles:{
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title:{
    fontSize: 40,
    fontWeight: '600',
  },
  subtitle:{
    fontSize: 16,
    color:'#5c5e62'
  },
  image: {
    width:'100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});
