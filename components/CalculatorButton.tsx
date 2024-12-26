import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import { Text, Pressable, Platform, Dimensions } from 'react-native'
import * as Haptics from 'expo-haptics';

const { width, height } = Dimensions.get('window');

const isAndroid = Platform.OS === 'android'
const isIphone = Platform.OS === 'ios'
interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}
const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    doubleSize = false,
    onPress,
}: Props) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? width > 360 ? 180 : 160 : width > 360 ? 80 : 70,
            })}
            onPress={
                () => {
                    onPress();
                    if (isAndroid || isIphone) {
                        return Haptics.notificationAsync(
                            Haptics.NotificationFeedbackType.Success
                        )
                    }
                }
            }
        >
            <Text
                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? 'black' : 'white',
                }}
            >
                {label}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton