import { StyleSheet } from 'react-native';

const CommonStyles = StyleSheet.create({
    listInput: {
        padding: 15,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginBottom: 20,
    },

    cardInput: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    cardButton: {
        margin: 10,
    },

    itemText: {
        flex: 1,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    itemCompleted: {
        textDecorationLine: 'line-through',
    },
    card: {
        // Define your card styles here
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        
        fontFamily: 'BodoniModa', 
    },

    regularText: {
        fontFamily: 'Roboto_400Regular',
        // Other text styles
    },
    boldText: {
        fontFamily: 'Roboto_700Bold',
        // Other text styles
    },
});

export default CommonStyles;
