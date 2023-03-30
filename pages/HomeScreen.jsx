import React from 'react'
import { StyleSheet,SafeAreaView, View, Image, Text, FlatList } from 'react-native'
import WalletCard from '../assets/components/cards/WalletCard';
import { useFonts } from 'expo-font';

function HomeScreen() {
    const wallets = [
        { 
          name: 'Nana Kwasi Asante',
          cardNumber: '**** **** **** 1234',
          balance: 2050.45,
          expiryDate: '06/25',
          cardType: 'Visa',
          index: 0
        },
        { 
          name: 'Nana Kwasi Asante',
          cardNumber: '**** **** **** 5678',
          balance: 1567.90,
          expiryDate: '08/24',
          cardType: 'Mastercard',
          index: 1
        },
        { 
          name: 'Nana Kwasi Asante',
          cardNumber: '**** **** **** 9012',
          balance: 700.00,
          expiryDate: '11/23',
          cardType: 'American Express',
          index: 2
        },
        { 
          name: 'Nana Kwasi Asante',
          cardNumber: '**** **** **** 3456',
          balance: 430.50,
          expiryDate: '02/26',
          cardType: 'Discover',
          index: 3
        },
        { 
          name: 'Nana Kwasi Asante',
          cardNumber: '**** **** **** 7890',
          balance: 899.75,
          expiryDate: '09/27',
          cardType: 'Visa',
          index: 4
        }
      ];
  
      const [loaded] = useFonts({
        'GeneralSans-Regular': require('../assets/fonts/GeneralSans-Regular.otf'),
        'GeneralSans-Semibold': require('../assets/fonts/GeneralSans-Semibold.otf'),
        'ClashDisplay-Semibold': require('../assets/fonts/ClashDisplay-Semibold.otf'),
        'ClashDisplay-Light': require('../assets/fonts/ClashDisplay-Light.otf'),
      });
    
      if (!loaded) {
        return null;
      }

      
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
            <Text style={styles.headerText}>Hello, Nana Kwasi!</Text>
            <Text style={styles.normalText}>Manage Your Funds</Text>
        </View>
        <Image source={{uri:'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1621&q=80'}}
        style={styles.userImage}/>
      </View>

     <View style={styles.cardContainer}>
        <FlatList data={wallets}
        renderItem={({item})=>(
            <WalletCard 
            name={item.name}
            balance={item.balance}
            cardType={item.cardType}
            cardNumber={item.cardNumber}
            expiryDate={item.expiryDate}
            index={item.index}
            />
        )}
        keyExtractor={item=>item.cardNumber}
        contentContainerStyle={{columnGap:5}}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
     </View>

    <View>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#121212',
        width:'100%',
        height:'100%',
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:100,
        resizeMode:'cover'
    },
    normalText:{
        color:'#ffffff',
        fontSize:20,
        fontFamily:'ClashDisplay-Light'
    },
    headerText:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:35,
        fontFamily:'ClashDisplay-Semibold'
    },
    container:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    cardContainer:{
        padding:10
    }
})
export default HomeScreen