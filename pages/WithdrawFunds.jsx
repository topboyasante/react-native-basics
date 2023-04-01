import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { SafeAreaView, Text, View } from 'react-native'

function WithdrawFunds() {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
        <View>
            <Text style={styles.headerText}>Withdraw Funds From Your Wallet</Text>
        </View>
        <Image source={{uri:'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1621&q=80'}}
        style={styles.userImage}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#121212',
        flex:1
    },
    normalText:{
        color:'#ffffff',
        fontSize:15,
        fontFamily:'ClashDisplay-Light'
    },
    headerText:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:20,
        fontFamily:'ClashDisplay-Semibold',
    },
    container:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:100,
        resizeMode:'cover'
    },
})
export default WithdrawFunds