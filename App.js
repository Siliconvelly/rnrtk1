import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import store from './redux/store'

const App = () => {
  return (
    <View style={styles.container}>
      <Home {...store} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})