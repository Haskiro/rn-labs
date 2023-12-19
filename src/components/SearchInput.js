import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {forwardRef, useImperativeHandle, useRef} from "react";

const SearchInput = ({
    value,
    onChangeSearchStr,
    onSearch
                             }, ref) => {
    const inputRef = useRef()

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current.focus()
    }))


    return (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Поиск по товарам"
                        value={value}
                        ref={inputRef}
                        onChangeText={(text) => onChangeSearchStr(text)}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={onSearch}>
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
        borderRadius: 5
    },
    addButton: {
        backgroundColor: 'purple',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default forwardRef(SearchInput);