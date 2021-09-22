import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 6,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    badgeContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3872E9',
        position: 'absolute',
        left: 65,
        top: 10,
    },
    badgeText: {
        color: 'white',
    },
    text: {
        color: 'gray'
    },
    messLine: {
        flexDirection: 'row',
    },

    mssg: {
        color: 'gray',
        flex: 1,
    },
    indicator: {
        height: 15,
        width: 30,

    },
});

export default styles;