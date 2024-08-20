import React from "react";
import {View, Text, Image, Button} from "react-native";
import styles from "../styles/globalStyles";

const productsCard = ({product}) =>{
    return(
        <View style={styles.container}>
            <Image/>
            <Text style={styles.title}>Producto:{product.name}</Text>
            <Text style={styles.title}>Precio:{product.price}</Text>
            <Text style={styles.title}>Descuento:{product.discount}</Text>
            <Button style={styles.button} title="Comprar producto"/>
        </View>
    );
};

export default productsCard;