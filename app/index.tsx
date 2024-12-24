import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'

const CalculatorApp = () => {

    return (
        <View style={globalStyles.calculatorContainer}>
            <Text style={globalStyles.mainResult} numberOfLines={1} adjustsFontSizeToFit>
                5000000000000x5000000000
            </Text>
            <Text
                style={globalStyles.subResult}
            >250</Text>
        </View>
    )
}

export default CalculatorApp