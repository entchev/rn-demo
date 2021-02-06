import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imageSource={require('../../assets/forest.jpg')}
        imageScore={4}
      ></ImageDetail>
      <ImageDetail
        title='Mountain'
        imageSource={require('../../assets/mountain.jpg')}
        imageScore={10}
      ></ImageDetail>
      <ImageDetail
        title='Ocean'
        imageSource={require('../../assets/beach.jpg')}
        imageScore={7}
      ></ImageDetail>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageScreen
