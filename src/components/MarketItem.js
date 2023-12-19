import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {memo} from "react";

const MarketItem = memo(({
    title,
    imagePath,
    imageLocalPath,
    price,
    onClick,
                    }) => {
    const getImageSource =() => {
        if (imagePath) {
            return {
                uri: imagePath
            }
        }
        return imageLocalPath;
    }

    return (<TouchableOpacity style={styles.wrapper} onPress={onClick}>
        <Image
            style={styles.image}
            source={getImageSource()}
        />
        <View style={styles.textBlock}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <View style={styles.priceWrapper}>
                <Text style={styles.price} numberOfLines={1}>
                    {price}
                </Text>
            </View>
        </View>
    </TouchableOpacity>)
})

export default MarketItem;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 20,
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    textBlock: {
        display: 'flex',
        gap: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
    },
    priceWrapper: {
        paddingVertical: 5,
        backgroundColor: 'green',
        borderRadius: 5,
    },
    price: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    }
})