import React from "react"
import { StyleSheet, View, Text } from "react-native"
const Login = () =>{
    return(
        <View style={styles.container}>
            <Text>Login</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }
})

export default Login