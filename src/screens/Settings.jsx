import {SafeAreaView, StyleSheet, Text, View} from "react-native";

const Settings = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                padding: 20,
            }}>
                <Text style={styles.title}>Настройки</Text>
                <Text>Здесь могли бы быть настройки, но мне стало лень их делать)</Text>
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
});

export default Settings;