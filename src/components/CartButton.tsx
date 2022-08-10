import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet, Image } from 'react-native'; 
import { COLORS } from '../theme/theme';

const CartButton =() => {
    return (
    <View style={styles.container}>
        <View style={styles.box}>
        <TouchableWithoutFeedback 
            onPress={() => console.log('Press button')} 
            style={styles.cartbutton} >
            <View style={styles.cartbuttonInner}>
                <Image source={require('../../assets/cart.png')} resizeMode="contain" style={styles.cartbuttonImage} />
            </View>
        </TouchableWithoutFeedback>
        </View>
    </View>
)};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex:1,
        height:0,
    },
    cartbutton:{
        shadowColor: COLORS.dark,
        shadowOpacity: 0.3,
        shadowOffset:{
            width:0,
            height:2,
        },
        marginBottom:50,
    },
    cartbuttonInner:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        width: 60,
        height: 60,
        borderRadius:30,
    },
    cartbuttonImage:{
        width:40,
        height:40,
        tintcolor: COLORS.white,
        marginBottom:0,
    },
    box: {
        width:60,
        height:60,
        marginTop:-30,
}
}
);


export default CartButton;