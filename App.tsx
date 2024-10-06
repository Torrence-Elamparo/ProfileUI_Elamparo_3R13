import React from 'react'
import { StyleSheet, View } from 'react-native'
import ProfileScreen from './src/screens/ProfileScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <ProfileScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})