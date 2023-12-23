import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useLayoutEffect, useState} from "react";
import {marketItemsMock} from "../mocks/marketItems.mock";

const SingleAdvert = ({route}) => {
    const [advert, setAdvert] = useState({});

    useLayoutEffect(() => {
        // не очень удачный пример для useLayoutEffect)) здесь лучше подойдет useEffect
        setAdvert(marketItemsMock.find(item => item.id === route.params.id));
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                padding: 20,
            }}>
                <Text style={styles.title}>Объявление</Text>
                <View style={styles.main_info_container}>
                    <Image
                        style={styles.image}
                        source={advert.imagePath}
                    />
                    <View style={styles.textBlock}>
                        <Text style={styles.advert_title} numberOfLines={1}>{advert.title}</Text>
                        <View style={styles.priceWrapper}>
                            <Text style={styles.price} numberOfLines={1}>
                                {advert.price}
                            </Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.description}>
                    {advert.description}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textDecorationLine: 'underline'
    },
    main_info_container: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
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
    advert_title: {
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
    },
    description: {
        fontSize: 17,
        marginTop: 10
    }
});

export default SingleAdvert;