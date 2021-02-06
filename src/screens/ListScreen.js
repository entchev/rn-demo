import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Johny West', age: 12 },
    { name: 'Maria', age: 12 },
    { name: 'Goshko', age: 12 },
    { name: 'Pazaaaa', age: 12 },
    { name: 'Gergana', age: 12 },
    { name: 'Vasilii', age: 12 },
    { name: 'Adrian Chiciuden', age: 12 },
  ]

  return (
    <FlatList
      keyExtractor={(friend) => {
        friend.name
      }}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
})

export default ListScreen
