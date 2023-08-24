import {Image, StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#eceff1",
        width: Dimensions.get("window").width / 2 - 16,
        height: 280,
        border: 10,
        marginLeft: 10,
        marginTop:10,
        borderRadius: 12,
    },
    image: {
        height: Dimensions.get("window").height / 4 - 20,
        width: Dimensions.get("window").width / 2 - 36,
        borderRadius: 12,
        margin: 10,
    },
    title: {
        fontSize:17,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 6,
        marginRight: 10,
        color: "black",        
    },
    price: {
        fontSize:15,
        marginLeft: 10,
        marginTop: 4,
        color: "gray",        
    },
    stock: {
        fontSize:14,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 10,
        color: "red",    
    }

})