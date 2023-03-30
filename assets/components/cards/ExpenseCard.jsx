import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


function ExpenseCard({name,category,price,tax}) {
  return (
    <View style={styles.cardContainer}>
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
            <View style={styles.buttonIcon}>
                <FontAwesomeIcon name='shopping-bag' size={20} color="#ffffff"/>
            </View>
            <View>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.categoryText}>{category}</Text>
            </View>
        </View>
        <View>
            <Text style={styles.priceText}>-${price}</Text>
            <Text style={styles.priceText}></Text>
            <Text style={styles.taxText}>Tax: ${tax}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15,
        backgroundColor:'#191919',
    },
    nameText:{
        color:'#ffffff',
        fontFamily:'ClashDisplay-Semibold',
        fontSize:20
    },
    categoryText:{
        fontFamily:'ClashDisplay-Light',
        color:'#ffffff'
    },
    priceText:{
        fontFamily:'ClashDisplay-Semibold',
        color:'#ffffff',
        fontSize:18

    },
    taxText:{
        fontFamily:'ClashDisplay-Light',
        color:'#ffffff'
    },
    buttonIcon:{
        backgroundColor:'#151515',
        padding:15,
        borderRadius:100,
    }
})

export default ExpenseCard