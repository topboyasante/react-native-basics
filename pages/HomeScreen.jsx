import React from 'react'
import { StyleSheet,SafeAreaView, View, Image, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import WalletCard from '../assets/components/cards/WalletCard';
import ActionButton from '../assets/components/buttons/ActionButton';


import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import ExpenseCard from '../assets/components/cards/ExpenseCard';

function HomeScreen({navigation}) {
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
  
      const expenses = [  {    "id": 1,    "name": "Groceries",    "category": "Food",    "price": 50.00,    "tax": 3.50  },  {    "id": 2,    "name": "Gas",    "category": "Transportation",    "price": 35.00,    "tax": 2.45  },  {    "id": 3,    "name": "Movie tickets",    "category": "Entertainment",    "price": 20.00,    "tax": 1.40  },  {    "id": 4,    "name": "Gym membership",    "category": "Fitness",    "price": 80.00,    "tax": 5.60  },  {    "id": 5,    "name": "Dinner at a restaurant",    "category": "Food",    "price": 75.00,    "tax": 5.25  },  {    "id": 6,    "name": "Uber ride",    "category": "Transportation",    "price": 15.00,    "tax": 1.05  },  {    "id": 7,    "name": "Movie rental",    "category": "Entertainment",    "price": 5.00,    "tax": 0.35  },  {    "id": 8,    "name": "Personal training session",    "category": "Fitness",    "price": 100.00,    "tax": 7.00  },  {    "id": 9,    "name": "Groceries",    "category": "Food",    "price": 40.00,    "tax": 2.80  },  {    "id": 10,    "name": "Train ticket",    "category": "Transportation",    "price": 20.00,    "tax": 1.40  }]
      
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
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

    <View style={styles.buttonContainer}>
        <ActionButton text={`Add Funds`} icon={<AntDesignIcon name="plus" size={20} color='#ffffff'/>} OnPress={()=>navigation.navigate("AddFunds")}/>
        <ActionButton text={`Withdraw`} icon={<FeatherIcon name="download" size={20} color='#ffffff'/>} OnPress={()=>navigation.navigate("WithdrawFunds")}/>
    </View>


    <View style={styles.expenseContainer}>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={styles.normalText}>Recent Expenses:</Text>

        <TouchableOpacity onPress={()=>navigation.navigate("Expenses")}>
          <View>
            <Text style={styles.normalText}>{`See more ->`}</Text>
          </View>
        </TouchableOpacity>

      </View>
      {
        expenses.map((item)=>{
            return(
                <ExpenseCard
                name={item.name}
                category={item.category}
                price={item.price}
                tax={item.tax}
                key={item.id}
                />
            )
        })
       }
    </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#121212',
        flex:1
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
        fontSize:25,
        fontFamily:'ClashDisplay-Semibold'
    },
    container:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    buttonContainer:{
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    cardContainer:{
        padding:10,
        cardContainer:1
    },
    expenseContainer:{
      flexDirection:'column',
      gap:20,
      padding:20
    }
})
export default HomeScreen