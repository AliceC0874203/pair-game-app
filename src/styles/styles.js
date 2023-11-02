import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 50,  // Adjust this value based on your actual navigation bar height
        paddingBottom: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 100,
        fontSize: 24,
        fontWeight: 'bold',
    },
    puzzleContainer: {
        width: 320,
        height: 320,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tile: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        justifyContent: "center",
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    gameInfo: {
        marginTop: 20,
    }
});

export default styles;
