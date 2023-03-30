import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font';



function ActionButton({icon,text}) {

    const [loaded] = useFonts({
        'GeneralSans-Regular': require('../../../assets/fonts/GeneralSans-Regular.otf'),
        'GeneralSans-Semibold': require('../../../assets/fonts/GeneralSans-Semibold.otf'),
        'ClashDisplay-Semibold': require('../../../assets/fonts/ClashDisplay-Semibold.otf'),
        'ClashDisplay-Light': require('../../../assets/fonts/ClashDisplay-Light.otf'),
      });
    
      if (!loaded) {
        return null;
      }

  return (
    <TouchableOpacity>
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