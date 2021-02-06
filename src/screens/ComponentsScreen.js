import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const name = 'Denis'
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text style={styles.altStyle}>Hello my name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  altStyle: {
    fontSize: 35,
  },
})

export default ComponentsScreen
