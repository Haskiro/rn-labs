import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                padding: 20,
            }}>
                <Text style={styles.title}>Профиль</Text>
                <View style={styles.userInfoContainer}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://i.pinimg.com/736x/fa/68/26/fa68266e4bcac979a85327dfe621938c.jpg',
                        }}
                    />
                    <View style={styles.textContainer}>
                       <Text style={styles.text}>Имя: Павел</Text>
                       <Text style={styles.text}>Фамилия: Кондратьев</Text>
                    </View>
                </View>
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
    userInfoContainer: {
        flexDirection: 'row',
        gap: 20,
        borderColor: 'orange',
        borderRadius: 20,
        borderWidth: 3,
        padding: 10
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: '100%'
    },
    textContainer: {
        display: 'flex',
        gap: 20
    },
    text: {
        fontSize: 18,
        padding: 5,
        backgroundColor: '#c5eff6',
        borderRadius: 10,
        overflow: 'hidden'
    }
});

export default Profile;