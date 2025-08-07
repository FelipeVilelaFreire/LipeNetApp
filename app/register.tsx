// app/register.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Animated,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Alert
} from 'react-native';
import { style } from "./style"; // Reutilizando o mesmo estilo do login
import { themes } from "../src/global/themes";
import { Feather } from '@expo/vector-icons';

export default function RegisterScreen() {
    // --- Novos estados para os campos de registro ---
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmada, setSenhaConfirmada] = useState("");
    const [error, setError] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmationPasswordVisible, setIsConfirmationPasswordVisible] = useState(false);
    const [focusedInput, setFocusedInput] = useState<null | 'username' | 'email' | 'senha' | 'senhaConfirmada'>(null);

    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);

    // --- Lógica de Registro Refatorada ---
    const handleRegister = () => {
        setError(""); // Limpa erros anteriores

        // 1. Validação de campos vazios
        if (!username || !email || !senha || !senhaConfirmada) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        // 2. Validação de senhas
        if (senha !== senhaConfirmada) {
            setError("As senhas não coincidem. Tente novamente.");
            return;
        }

        // 3. Validação de tamanho da senha (exemplo)
        if (senha.length < 6) {
            setError("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        // Se tudo estiver OK, simula o sucesso
        console.log(`Novo usuário: ${username}, Email: ${email}`);
        Alert.alert(
            "Cadastro Realizado!",
            "Sua conta foi criada com sucesso. Você será redirecionado para o login.",
            [{ text: "OK", onPress: () => router.replace('/') }]
        );
    };

    return (
        <KeyboardAvoidingView
            style={style.keyboardView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Animated.View style={[style.container, { opacity: fadeAnim }]}>
                <View style={style.contentContainer}>

                    <View style={style.headerContainer}>
                        <Text style={style.logo}>Crie sua Conta</Text>
                        <Text style={style.welcomeText}>Junte-se à família Family TV!</Text>
                    </View>

                    <View style={style.formContainer}>
                        {/* NOVO CAMPO DE USERNAME */}
                        <Text style={style.inputLabel}>Nome de Usuário</Text>
                        <View style={[style.inputContainer, focusedInput === 'username' && style.inputContainerFocused]}>
                            <Feather name="user" size={20} color={themes.colors.textSecondary} style={style.inputIcon} />
                            <TextInput
                                style={style.input}
                                placeholder="Como você quer ser chamado?"
                                placeholderTextColor={themes.colors.textSecondary}
                                autoCapitalize="none"
                                value={username}
                                onChangeText={setUsername}
                                onFocus={() => setFocusedInput('username')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </View>

                        {/* CAMPO DE EMAIL */}
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

                        {/* CAMPO DE SENHA */}
                        <Text style={style.inputLabel}>Senha</Text>
                        <View style={[style.inputContainer, focusedInput === 'senha' && style.inputContainerFocused]}>
                             <Feather name="lock" size={20} color={themes.colors.textSecondary} style={style.inputIcon} />
                            <TextInput
                                style={style.input}
                                placeholder="Crie uma senha segura"
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

                        {/* CAMPO DE CONFIRMAR SENHA */}
                        <Text style={style.inputLabel}>Confirme a Senha</Text>
                        <View style={[style.inputContainer, focusedInput === 'senhaConfirmada' && style.inputContainerFocused]}>
                             <Feather name="check-circle" size={20} color={themes.colors.textSecondary} style={style.inputIcon} />
                            <TextInput
                                style={style.input}
                                placeholder="Digite a senha novamente"
                                placeholderTextColor={themes.colors.textSecondary}
                                secureTextEntry={!isConfirmationPasswordVisible}
                                autoCapitalize="none"
                                value={senhaConfirmada}
                                onChangeText={setSenhaConfirmada}
                                onFocus={() => setFocusedInput('senhaConfirmada')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        <Pressable onPress={() => setIsConfirmationPasswordVisible(!isConfirmationPasswordVisible)} style={style.passwordToggle}>
                                <Feather name={isConfirmationPasswordVisible ? "eye-off" : "eye"} size={20} color={themes.colors.textSecondary} />
                            </Pressable>
                        </View>
                    </View>

                    {error ? <Text style={style.errorText}>{error}</Text> : null}

                    <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={handleRegister}>
                        <Text style={style.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </KeyboardAvoidingView>
    );
}