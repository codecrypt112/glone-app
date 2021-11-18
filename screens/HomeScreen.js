import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../components/home/Header'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 30,
    }
})


export default HomeScreen
