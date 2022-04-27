
export interface CalculatorState{
    currentNumbers:string;
    currentResult:string;
    firstNumber:string;
    secondNumber:string;
    typeOfOperation:string;
    lastOperation:string;
    isActive:boolean;
}

export interface Button{
    title:string;
    background?:string;
    textColor?:string;
    buttonLarge?:boolean;
    dispatch?: () => void;
}
