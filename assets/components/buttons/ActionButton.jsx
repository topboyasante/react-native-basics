import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


function ActionButton({icon,text,OnPress}) {

  return (
    <TouchableOpacity onPress={OnPress}>
    <View style={styles.container}>
        <View style={styles.buttonIcon}>{icon}</View>
        <Text style={styles.buttonText}>{text}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonText:{
        color:'#ffffff',
        fontFamily:'ClashDisplay-Light',
        fontSize:20,
    },
    container:{
      
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        gap:20, 
        width:150
    },
    buttonIcon:{
        backgroundColor:'#191919',
        padding:15,
        borderRadius:100,
    }
})

export default ActionButton