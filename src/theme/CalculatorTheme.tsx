import { StyleSheet } from 'react-native';


export const colors = {
    grayDark:'#2D2D2D',
    grayLight: '#9B9B9B',
    grayWithRgba: 'rgba(255,255,255,0.5)',
    orange:'#FF9427',
    black:'#000000',
    white:'#fff',
};

export const styles = StyleSheet.create({
    safeView:{
        backgroundColor: colors.black,
        flex:1,
    },
    calculatorContainer:{
        flex: 1,
        justifyContent:'flex-end',
        paddingHorizontal: 35,
        // borderWidth:1,
        // borderColor: colors.white,
    },
    resultContainer:{
        paddingHorizontal: 10,
        // borderWidth:1,
        // borderColor: colors.white,
    },
    buttonContainer:{
        // borderWidth:1,
        // borderColor: colors.white,
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:8,
    },
    button:{
        backgroundColor:colors.grayDark,
        borderRadius: 100,
        height: 70,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:9,
        width: 70,
    },
    buttonText:{
        color:colors.white,
        fontSize: 30,
        fontWeight:'500',
        lineHeight: 35,
        padding: 10,
    },
    previousResult:{
        color:colors.grayWithRgba,
        fontSize: 22.5,
        textAlign:'right',
    },
    result:{
        color: colors.white,
        fontSize: 55,
        textAlign:'right',
    },
});
