import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, } from "react-native";
import styles from './ProductsCard.style';

const ProductsCard = ({data}) => {
    return(
        <TouchableOpacity>
            <View style = {styles.container}>
            <Image  resizeMode="contain" style= {styles.image} source={{uri: data.imgURL}}/>
            <Text numberOfLines={2} style = {styles.title}>{data.title}</Text>
            <Text style = {styles.price}>{data.price}</Text>
            <Text style={styles.stock}>{!(data.inStock)?"STOKTA YOK":""}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default ProductsCard