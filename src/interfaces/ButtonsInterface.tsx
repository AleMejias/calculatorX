
export interface CalculatorState{
    currentNumbers:string;
    currentResult:string;
    numberWithComma:string;
    numberWithOutComma:string;
    firstNumber:string;
    secondNumber:string;
    typeOfOperation:string;
    isActive:boolean;
}

export interface Button{
    title:string;
    background?:string;
    textColor?:string;
    buttonLarge?:boolean;
    dispatch?: () => void;
}
