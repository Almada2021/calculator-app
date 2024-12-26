import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    substract = '-',
    multiply = '*',
    divide = '/',
}
export const useCalculator = () => {
    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');
    const lastOperation = useRef<Operator | undefined>();
    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);
    useEffect(() => {
        const subResult = calculateResult();
        // Todo:
        if (subResult) {
            setPreviousNumber(`${subResult}`);
        }
    }, [formula])

    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
        setFormula('0');
        lastOperation.current = undefined;
    }
    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }
        setNumber('-' + number)
    }
    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = number;
        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }
        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }
        setNumber('0')
    }


    const buildNumber = (numberString: string) => {
        // Verificar si ya existe el punto decimal
        if (number.includes('.') && numberString === '.') {
            return;
        }
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(numberString + numberString)
            }
            if (numberString === '0' && number.includes('.')) {
                return setNumber(numberString + numberString)

            }

            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString)
            }
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
            setNumber(number + numberString)
        }
        setNumber(number + numberString)
    }
    const setLastNumber = () => {
        setPreviousNumber(number);
        setNumber('0');
    }
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide
    }
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply
    }
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add
    }
    const substractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.substract
    }

    const calculateResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');
        const num1 = Number(firstValue)
        const num2 = Number(secondValue);
        if (isNaN(num2)) return num1;
        switch (operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.substract:
                return num1 - num2
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2;
            default:
                return false;
        }
    }
    return {
        //props
        formula,
        number,
        previousNumber,
        //methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        //ops
        divideOperation,
        multiplyOperation,
        addOperation,
        substractOperation,
    }
}