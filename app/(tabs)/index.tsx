// app/(tabs)/index.tsx
import React, { useState, useRef, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Animated,
    KeyboardAvoidingView,
    Platform,
    Pressable
} from 'react-native';
import { style } from "./style";
import { themes } from "../../src/global/themes";
import { Feather } from '@expo/vector-icons';

export default function TabOneScreen() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [focusedInput, setFocusedInput] = useState<null | 'email' | 'senha'>(null);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useFocusEffect(
      useCallback(() => {
        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
      }, [fadeAnim])
    );

    const handleLogin = () => {
        setError("");
        if (!email || !senha) {
            setError("Por favor, preencha todos os campos.");
            return;
        }
        Alert.alert("Login com Sucesso!", `Bem-vindo de volta, ${email}!`);
    };

    const handleRegisterPress = () => {
        console.log("Navegar para a tela de Registro!");
        Alert.alert("Navegação", "Aqui você iria para a tela de cadastro.");
    };

    return (
        <KeyboardAvoidingView
            style={style.keyboardView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Animated.View style={[style.container, { opacity: fadeAnim }]}>

                <View style={style.headerContainer}>
                    <Text style={style.logo}>Family TV</Text>
                    <Text style={style.welcomeText}>Bem-vindo à sua família!</Text>
                </View>

                <View style={style.formContainer}>
                    <Text style={style.inputLabel}>Endereço de e-mail</Text>
                    <View style={[style.inputContainer, focusedInput === 'email' && style.inputContainerFocused]}>
                        <Feather name="mail" size={20} color={themes.colors.textSecondary} style={style.inputIcon} />
                        <TextInput
                            style={style.input}
                            placeholder="seuemail@exemplo.com"
                            placeholderTextColor={themes.colors.textSecondary}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            onFocus={() => setFocusedInput('email')}
                            onBlur={() => setFocusedInput(null)}
                        />
                    </View>

                    <Text style={style.inputLabel}>Senha</Text>
                    <View style={[style.inputContainer, focusedInput === 'senha' && style.inputContainerFocused]}>
                         <Feather name="lock" size={20} color={themes.colors.textSecondary} style={style.inputIcon} />
                        <TextInput
                            style={style.input}
                            placeholder="Sua senha secreta"
                            placeholderTextColor={themes.colors.textSecondary}
                            secureTextEntry={!isPasswordVisible}
                            autoCapitalize="none"
                            value={senha}
                            onChangeText={setSenha}
                            onFocus={() => setFocusedInput('senha')}
                            onBlur={() => setFocusedInput(null)}
                        />
                        <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={style.passwordToggle}>
                            <Feather name={isPasswordVisible ? "eye-off" : "eye"} size={20} color={themes.colors.textSecondary} />
                        </Pressable>
                    </View>
                </View>

                {error ? <Text style={style.errorText}>{error}</Text> : null}
            <View style={style.buttonEntrarRegistrar}>
                <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={handleLogin}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <View>
                <Text>Não possui conta ainda?</Text>
                <TouchableOpacity style={style.registerButton} activeOpacity={0.8} onPress={handleRegisterPress}>
                    <Text style={style.registerButtonText}>Registre-se</Text>
                </TouchableOpacity>
                </View>
            </View>
            </Animated.View>
        </KeyboardAvoidingView>
    );
}