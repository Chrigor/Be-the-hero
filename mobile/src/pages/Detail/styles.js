import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:32,
    },

    incident: {
        paddingVertical:8,
        paddingHorizontal:12,
        borderRadius:8,
        backgroundColor:'#fff',
        marginVertical:16
    },

    incidentProperty: {
        fontSize:14,
        color:'#41424d',
        fontWeight:'bold',
        marginTop:8,
    },

    incidentValue: {
        marginTop:8,
        fontSize:15,
        color:'#737380'
    },

    contactBox: {
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
    },

    heroTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight:25,
    },

    heroDescription: {  
        fontSize:15,
        color:'#737380',
        marginTop:16,
    },

    actions: {
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    action: {
        backgroundColor:'#E02041',
        borderRadius:8,
        width:'48%',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },

    actionText: {
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold'
    }
});