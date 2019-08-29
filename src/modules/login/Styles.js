
import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from '../../utils/Dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        width: responsiveWidth(90),
        height: responsiveHeight(8),
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: responsiveHeight(1.5),
        padding: responsiveWidth(2),
    },
    loginButton:{
        marginTop: responsiveHeight(3),
        width: responsiveWidth(90),
        height: responsiveHeight(8),
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText:{
        color: '#fff',
        fontSize: responsiveFontSize(2)
    }

});

export default styles;
