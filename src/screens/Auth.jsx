import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity, StyleSheet,
} from "react-native";
import React, {useContext, useState} from "react";
import {useForm} from "../hooks/useForm";
import {AuthContext} from "../components/AuthProvider";
import {usersMock} from "../mocks/users.mock";

const Auth = () => {
    const [status, setStatus] = useState('idle');
    const {form, handleChange} = useForm({
        login: '',
        password: ''
    })
    const {setUser} = useContext(AuthContext);

    const handleSubmit = async () => {
        setStatus("loading")
        setTimeout(async () => {
            const existsUser = usersMock.find(user => user.login === form.login);
            if (existsUser && existsUser.password === form.password) {
                setStatus('idle');
                setUser(existsUser);
            } else {
                setStatus('error')
            }
        }, 500)
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Вход</Text>
            <View>
                <Text style={styles.label}>Логин</Text>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={handleChange("login")}
                ></TextInput>
                <Text style={styles.label}>Пароль</Text>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={handleChange("password")}
                ></TextInput>
                {status === 'error' && <Text style={styles.error_text}>
                    Неверные логин или пароль
                </Text>}
                <TouchableOpacity onPress={handleSubmit}
                                  style={[styles.button, status === 'error' && styles.button_error]}
                                  disabled={status === "loading"}>
                    <Text style={styles.button_text}>{status === "loading" ? "Загрузка..." : "Войти"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },
    label: {
        marginBottom: 5
    },
    error_text: {
      color: 'red'
    },
    input: {
        width: 250,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#123094',
        paddingVertical: 10,
        borderRadius: 10
    },
    button_error: {
        backgroundColor: 'red',
    },
    button_text: {
        color: 'white',
        textAlign: 'center',
    },
});
export default Auth;