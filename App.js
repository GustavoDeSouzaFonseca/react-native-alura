import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'; 
import Home from './components/home/Home';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Home/>      
    </SafeAreaView>
  );
};
