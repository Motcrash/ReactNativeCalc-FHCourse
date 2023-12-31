import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    text: string,
    color?: '#1e81b0' | '#9B9B9B' | '#2D2D2D',
    long?: boolean,
    action: ( num: string) => void,
}

export const ButtonCalc = ({ text, color = '#2D2D2D', long = false, action }: Props) => {
  return (

    <TouchableOpacity
    onPress={ () => action( text ) }>
        
        <View style = {{ 
            ...styles.button,
            backgroundColor: color,
            width: ( long ) ? 180 : 80
        }}> 
            <Text style = {{
                ...styles.textButton,
                color: (color === '#9B9B9B' ? 'black' : 'white')
            }}>{ text }</Text>
        </View>
    
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    },

});