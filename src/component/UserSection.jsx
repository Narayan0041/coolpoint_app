import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserSection = () => {
  return (
    <View>
    <SafeAreaView style={styles.SafeAreaView}>
<Text>Hello</Text>
    </SafeAreaView>
    </View>
  )
}

export default UserSection

const styles = StyleSheet.create({
    SafeAreaView:{
        marginTop:"10%"
    }
})