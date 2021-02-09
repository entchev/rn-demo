import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + 1 }
    case 'decrease':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  return (
    <View>
      <Text>Currect Count: {state.counter}</Text>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increase' })
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrease' })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
