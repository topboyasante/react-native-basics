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
            <Image source={CCInner} style={{borderRadius:5, width:40, height:30}}/>
            <Text style={styles.cardNumber}>{cardNumber}</Text>
            <View style={styles.body}>
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
        marginHorizontal: 8
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25
      },
      body: {
        flex: 1,
        justifyContent: 'flex-end'
      },
      cardType: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
      },
      cardNumber: {
        fontSize: 35,
        color: '#ffffff'
      },
      expiryDate: {
        fontSize: 16,
        color: '#ffffff'
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8
      },
      balance: {
        fontSize: 16,
        color: '#ffffff'
      }
})

export default WalletCard