
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
         flex: 1, 
         backgroundColor: '#fff' 
    },
    logoutView:{ flexDirection: 'row-reverse', alignItems: 'center', width: '100%', },
    logoutButton:{backgroundColor: '#000', left: 10},
    logoutText:{  borderWidth: 1, padding: 10, color: '#fff' },
    container:{flex:1, justifyContent:'center', alignItems: 'center'}

});

export default styles;
