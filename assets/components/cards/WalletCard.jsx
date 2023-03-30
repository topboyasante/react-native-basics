import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function WalletCard({index,name,cardNumber,cardType,expiryDate,balance}) {
    const colors = ['#E91E63', '#2196F3', '#4CAF50', '#FFC107', '#795548'];
    
  return (
    <TouchableOpacity>
        <View style={[styles.container, { backgroundColor: colors[index % colors.length]  }]}>
            <View style={styles.header}>
                <Text style={styles.cardType}>{cardType}</Text>
                <Text style={styles.expiryDate}>{expiryDate}</Text>
            </View>
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
        borderRadius: 16,
        padding: 16,
        width: 280,
        height: 180,
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
        color: '#000'
      },
      cardNumber: {
        fontSize: 25,
        color: '#000'
      },
      expiryDate: {
        fontSize: 16,
        color: '#000'
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8
      },
      balance: {
        fontSize: 16,
        color: '#000'
      }
})

export default WalletCard