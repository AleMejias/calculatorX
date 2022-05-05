export interface Button{
    title:string;
    background?:string;
    textColor?:string;
    buttonLarge?:boolean;
    currentButtonActive?:string;
    isActive?:boolean;
    blockButton?:boolean;
    dispatch?: () => void;
}
