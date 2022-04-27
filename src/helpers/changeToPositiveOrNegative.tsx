export const changeToPositiveOrNegative = ( num:string ):string => {
    let value:string = num;

    if ( num !== '' && num !== '0' ) {
        if ( !num.includes('-') ) {
            value = '-' + num;
        } else {
            value = num.replace('-','');
        }
    }
    return value;
};
