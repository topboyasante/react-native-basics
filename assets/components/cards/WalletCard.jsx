import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CCInner from '../../images/cc-inner.png'

function WalletCard({index,name,cardNumber,cardType,expiryDate,balance}) {

    const colors = ['#E91E63', '#2196F3', '#4CAF50', '#df3512', '#3b556e'];

  return (
    <TouchableOpacity>
        <View style={[styles.container, { backgroundColor: colors[index % colors.length]  }]}>
          
            <View style={styles.header}>
                <Text style={styles.cardType}>{cardType.toUpperCase()}</Text>
                <Text style={styles.expiryDate}>{expiryDate}</Text>
            </View>

           <View style={styles.body}>
           <Image source={CCInner} style={{borderRadius:5, width:50, height:40}}/>
            <Text style={styles.cardNumber}>{cardNumber}</Text>
           </View>

            <View style={styles.footer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.balance}>Balance: ${balance}</Text>
            </View>

        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 16,
        width: 350,
        height: 220,
        marginHorizontal: 8,
       
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      body: {
        flex: 1,
        marginVertical:45
      },
      footer:{

      },
      cardType: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily:'ClashDisplay-Semibold'
      },
      cardNumber: {
        fontSize: 35,
        color: '#ffffff',
        fontFamily:'ClashDisplay-Semibold'
      },
      expiryDate: {
        fontSize: 16,
        color: '#ffffff',
        fontFamily:'ClashDisplay-Light'
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily:'ClashDisplay-Light'
      },
      balance: {
        fontSize: 16,
        color: '#ffffff',
        fontFamily:'ClashDisplay-Semibold'
      }
})

export default WalletCard