import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import OfferScreen from '../screens/OfferScreen';
import AccountScreen from '../screens/AccountScreen';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../theme/theme';
import CartButton from '../components/CartButton';

const Tab = createBottomTabNavigator();

const getIconColor = (focused: any) => ({tintColor:focused ? COLORS.primary : COLORS.light});

const TabNavigator = () => {
    return (
            <Tab.Navigator 
                initialRouteName="Home" 
                screenOptions={{
                        headerShown:false, 
                        tabBarShowLabel:false,
                        tabBarStyle:styles.tabBar,
                        }}>
                <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarItemStyle: {
                        height: 0
                    },
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabIconContainer} >
                          <Image
                            source={require("../../assets/Home.png")}
                            resizeMode="contain"
                            style={[styles.tabIcon,getIconColor(focused)]}
                          />
                        </View>
                      ),
                    }}
                    />


                <Tab.Screen name="Browse" component={BrowseScreen} 
                 options={{
                    tabBarItemStyle: {
                        height: 0
                    },
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabIconContainer} >
                          <Image
                            source={require("../../assets/browse.png")}
                            resizeMode="contain"
                            style={[styles.tabIcon,getIconColor(focused)]}
                          />
                        </View>
                      ),
                    }}/>
                {/* ---------------------------------------------------------------- */}
                <Tab.Screen name="Cart" component={HomeScreen} 
                options={{
                    tabBarItemStyle: {
                        height: 0
                    },
                    tabBarButton: () => (
                        <CartButton />
                    )



                    // tabBarIcon: ({focused}) => (
                    //     <View style={styles.tabIconContainer} >
                    //       <Image
                    //         source={require("../../assets/cart.png")}
                    //         resizeMode="contain"
                    //         style={[styles.tabIcon,getIconColor(focused)]}
                    //       />
                    //     </View>
                    //   ),
                    }}
                    />
                {/* ---------------------------------------------------------------- */}
                <Tab.Screen name="Offer" component={OfferScreen} 
                 options={{
                    tabBarItemStyle: {
                        height: 0
                    },
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabIconContainer} >
                          <Image
                            source={require("../../assets/offer.png")}
                            resizeMode="contain"
                            style={[styles.tabIcon,getIconColor(focused)]}
                          />
                        </View>
                      ),
                    }}/>
                <Tab.Screen name="Account" component={AccountScreen} 
                 options={{
                    tabBarItemStyle: {
                        height: 0
                    },
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabIconContainer} >
                          <Image
                            source={require("../../assets/account.png")}
                            resizeMode="contain"
                            style={[styles.tabIcon,getIconColor(focused)]}
                          />
                        </View>
                      ),
                    }}/>
            </Tab.Navigator>
        );
    };

    const styles =StyleSheet.create({
        tabBar: {
            position: "absolute",
            padding: 0,
            left: 10,
            right: 10,
            bottom:12,
            height:50,
            borderRadius:20,
            backgroundColor: COLORS.white,
            borderTopColor:"transparent",
            shadowColor:COLORS.dark,
            shadowOffset:{width:0,height:6},
            shadowOpacity:0.1,
            shadowRadius:3,
            elevation:3,

        },
        tabIconContainer:{
            position:"absolute",
            top:10,
            alignItems: "center",
            justifyContent: "center",
            borderWidth:0,          //Set to 1 to check the line boundaries
            width:37,
            height:37,
            borderColor:COLORS.dark,
            

        },
        tabIcon: {
            width: 30,
            height: 30
        }
    });

export default TabNavigator;

