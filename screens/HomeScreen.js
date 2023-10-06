import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { originSelector, setOrigin } from '../navSlice'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'



const HomeScreen = () => {
    const dispatch=useDispatch();
    const origin=useSelector(originSelector);
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
            <Image
                style={{
                    width:100,
                    height:100,
                    resizeMode:'contain'
                }}
                source={{
                    uri:'https://links.papareact.com/gzs'
                }}
            />
            <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})