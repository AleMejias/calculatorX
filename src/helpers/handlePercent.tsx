export const handlePercent = ( num:string ):string => {

    let result:string = '';

    result = (Number( num ) / 100).toString();

    return result;
};
