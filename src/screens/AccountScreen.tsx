import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {COLORS} from "../theme/theme"
const AccountScreen =()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Account Screen
            </Text>
        </View>
        );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bg,
        },
    text: {
        fontWeight:'600',
        fontSize: 32,
        color: COLORS.body
    }
    });
export default AccountScreen