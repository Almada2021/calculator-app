import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>
                    50x500
                </ThemeText>
                <ThemeText variant='h2'>
                    250
                </ThemeText>
            </View>
            {/* Botones */}
            <View style={[globalStyles.row]}>
                <CalculatorButton
                    color={Colors.lightGray}
                    label='C'
                    blackText
                    onPress={() => { }}
                />
                <CalculatorButton
                    color={Colors.lightGray}
                    label='+/-'
                    blackText
                    onPress={() => { }}
                />
                <CalculatorButton
                    color={Colors.lightGray}
                    label='del'
                    blackText
                    onPress={() => { }}
                />
                <CalculatorButton
                    label='÷'
                    color={Colors.orange}
                    onPress={() => { }}
                />
            </View>
            <View style={[globalStyles.row]}>
                <CalculatorButton
                    color={Colors.darkGray}
                    label='7'
                    onPress={() => { }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='8'
                    onPress={() => { }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='9'
                    onPress={() => { }}
                />
                <CalculatorButton
                    label='x'
                    color={Colors.orange}
                    onPress={() => { }}
                />
            </View>
            <View style={[globalStyles.row]}>
                <CalculatorButton
                    color={Colors.darkGray}
                    label='4'
                    onPress={() => { }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='5'
                    onPress={() => { }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='6'
                    onPress={() => { }}
                />
                <CalculatorButton
                    label='-'
                    color={Colors.orange}
                    onPress={() => { }}
                />
            </View>
            <View style={[globalStyles.row]}>
                <CalculatorButton
                    color={Colors.darkGray}
                    label='1'
                    onPress={() => { }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='2'
                    onPress={() => { }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='3'
                    onPress={() => { }}
                />
                <CalculatorButton
                    label='+'
                    color={Colors.orange}
                    onPress={() => { }}
                />
            </View>
            <View style={[globalStyles.row]}>
                <CalculatorButton
                    color={Colors.darkGray}
                    label='0'
                    onPress={() => { }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='.'
                    onPress={() => { }}
                />

                <CalculatorButton
                    label='='
                    color={Colors.orange}
                    onPress={() => { }}
                />
            </View>

        </View>
    )
}

export default CalculatorApp