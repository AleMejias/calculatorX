export interface Button{
    title:string;
    background?:string;
    textColor?:string;
    buttonLarge?:boolean;
    dispatch?: () => void;
}
