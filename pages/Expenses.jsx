import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import ExpenseCard from '../assets/components/cards/ExpenseCard'

function Expenses() {
    const expenses = [  {    "id": 1,    "name": "Groceries",    "category": "Food",    "price": 50.00,    "tax": 3.50  },  {    "id": 2,    "name": "Gas",    "category": "Transportation",    "price": 35.00,    "tax": 2.45  },  {    "id": 3,    "name": "Movie tickets",    "category": "Entertainment",    "price": 20.00,    "tax": 1.40  },  {    "id": 4,    "name": "Gym membership",    "category": "Fitness",    "price": 80.00,    "tax": 5.60  },  {    "id": 5,    "name": "Dinner at a restaurant",    "category": "Food",    "price": 75.00,    "tax": 5.25  },  {    "id": 6,    "name": "Uber ride",    "category": "Transportation",    "price": 15.00,    "tax": 1.05  },  {    "id": 7,    "name": "Movie rental",    "category": "Entertainment",    "price": 5.00,    "tax": 0.35  },  {    "id": 8,    "name": "Personal training session",    "category": "Fitness",    "price": 100.00,    "tax": 7.00  },  {    "id": 9,    "name": "Groceries",    "category": "Food",    "price": 40.00,    "tax": 2.80  },  {    "id": 10,    "name": "Train ticket",    "category": "Transportation",    "price": 20.00,    "tax": 1.40  }]
    
    return (
        <SafeAreaView style={styles.mainContainer}>
           <ScrollView>
                <View style={styles.container}>
                        <View>
                            <Text style={styles.headerText}>Your Expenses</Text>
                        </View>
                        <Image source={{uri:'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1621&q=80'}}
                        style={styles.userImage}/>
                </View>
                <View style={styles.expenseContainer}>
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
        expenseContainer:{
            flexDirection:'column',
            gap:20,
            padding:20
          }
    })
export default Expenses