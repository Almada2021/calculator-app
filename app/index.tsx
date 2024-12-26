import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {
    const {
        formula,
        number,
        previousNumber,
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        addOperation,
        substractOperation,
    } = useCalculator();

    return (
        <SafeAreaView style={globalStyles.calculatorContainer}>
            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>
                    {formula}
                </ThemeText>
                <ThemeText variant='h2'>
                    {previousNumber}
                </ThemeText>
            </View>
            {/* Botones */}
            <View style={[globalStyles.row]}>
                <CalculatorButton
                    color={Colors.lightGray}
                    label='C'
                    blackText
                    onPress={() => { clean() }}
                />
                <CalculatorButton
                    color={Colors.lightGray}
                    label='+/-'
                    blackText
                    onPress={() => { toggleSign() }}
                />
                <CalculatorButton
                    color={Colors.lightGray}
                    label='del'
                    blackText
                    onPress={() => { deleteLast() }}
                />
                <CalculatorButton
                    label='÷'
                    color={Colors.orange}
                    onPress={divideOperation}
                />
            </View>
            <View style={[globalStyles.row]}>
                <CalculatorButton
                    color={Colors.darkGray}
                    label='7'
                    onPress={() => { buildNumber("7") }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='8'
                    onPress={() => { buildNumber("8") }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='9'
                    onPress={() => { buildNumber("9") }}
                />
                <CalculatorButton
                    label='X'
                    color={Colors.orange}
                    onPress={multiplyOperation}
                />
            </View>
            <View style={[globalStyles.row]}>
                <CalculatorButton
                    color={Colors.darkGray}
                    label='4'
                    onPress={() => { buildNumber("4") }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='5'
                    onPress={() => { buildNumber("5") }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='6'
                    onPress={() => { buildNumber("6") }}
                />
                <CalculatorButton
                    label='-'
                    color={Colors.orange}
                    onPress={() => { substractOperation() }}
                />
            </View>
            <View style={[globalStyles.row]}>
                <CalculatorButton
                    color={Colors.darkGray}
                    label='1'
                    onPress={() => { buildNumber("1") }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='2'
                    onPress={() => { buildNumber("2") }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='3'
                    onPress={() => { buildNumber("3") }}
                />
                <CalculatorButton
                    label='+'
                    color={Colors.orange}
                    onPress={addOperation}
                />
            </View>
            <View style={[globalStyles.row]}>
                <CalculatorButton
                    color={Colors.darkGray}
                    label='0'
                    doubleSize
                    onPress={() => { buildNumber("0") }}
                />
                <CalculatorButton
                    color={Colors.darkGray}
                    label='.'
                    onPress={substractOperation}
                />

                <CalculatorButton
                    label='='
                    color={Colors.orange}
                    onPress={() => { buildNumber('=') }}
                />
            </View>

        </SafeAreaView>
    )
}

export default CalculatorApp