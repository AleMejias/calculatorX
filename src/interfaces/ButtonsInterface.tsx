
export interface CalculatorState{
    currentNumbers:string;
    previousResult:string;
    currentResult:string;
}

export interface Button{
    title:string;
    background?:string;
    textColor?:string;
    buttonLarge?:boolean;
    dispatch?: () => void;
}
