
export interface CalculatorState{
    currentNumbers:string;
    previousResult:string;
    currentResult:string;
    numberWithComma:string;
    numberWithOutComma:string;
}

export interface Button{
    title:string;
    background?:string;
    textColor?:string;
    buttonLarge?:boolean;
    dispatch?: () => void;
}
