import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo}
                source={require('../../assets/glone.png')} />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon}
                    source={require('../../assets/notifications.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.icon}
                    source={require('../../assets/search.png')} />
                </TouchableOpacity>
            </View>

                
        
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    
    iconsContainer: {
        flexDirection: 'row',
    },

    icon:{
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    },

    logo: {
        width: 80,
        height: 50,
        resizeMode: 'contain',
    }
})

export default Header
