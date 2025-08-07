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
import { style } from "./style";
import { themes } from "../src/global/themes";
import { Feather, Ionicons } from '@expo/vector-icons'; // Adicionado Ionicons para o botão de voltar

export default function RegisterScreen() {
    // --- Seus estados estão corretos ---
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

    // --- Lógica de Registro Refatorada e Mais Robusta ---
    const handleRegister = () => {
        console.log("Botão 'Cadastrar' pressionado. Iniciando validação...");
        setError("");

        if (!username || !email || !senha || !senhaConfirmada) {
            console.log("Validação falhou: Campos vazios.");
            setError("Por favor, preencha todos os campos.");
            return;
        }
        if (senha !== senhaConfirmada) {
            console.log("Validação falhou: Senhas não coincidem.");
            setError("As senhas não coincidem. Tente novamente.");
            return;
        }
        if (senha.length < 6) {
            console.log("Validação falhou: Senha muito curta.");
            setError("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        // Se todas as validações passaram, esta parte será executada
        console.log("Validação bem-sucedida! Preparando para navegar...");
        console.log(`Novo usuário: ${username}, Email: ${email}`);
        router.replace('/home');
    };

    return (
        <KeyboardAvoidingView
            style={style.keyboardView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Animated.View style={[style.container, { opacity: fadeAnim }]}>
                <View style={style.contentContainer}>
                    {/* Cabeçalho com o botão de voltar que você queria */}
                    <View style={style.headerContainer}>
                        <TouchableOpacity style={style.backButton} onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={28} color={themes.colors.primary} />
                        </TouchableOpacity>
                        <Text style={style.logo}>Crie sua Conta</Text>
                        <View style={{ width: 28 }} /> 
                    </View>
                    <Text style={style.welcomeText}>Junte-se à família Family TV!</Text>

                    <View style={style.formContainer}>
                        {/* Campo de Username */}
                        <Text style={style.inputLabel}>Nome de Usuário</Text>
                        <View style={[style.inputContainer, focusedInput === 'username' && style.inputContainerFocused]}>
                            <Feather name="user" size={20} color={themes.colors.textSecondary} style={style.inputIcon} />
                            <TextInput
                                style={style.input}
                                placeholder="Como você quer ser chamado?"
                                value={username}
                                onChangeText={setUsername}
                                onFocus={() => setFocusedInput('username')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </View>

                        {/* Campo de Email */}
                        <Text style={style.inputLabel}>Endereço de e-mail</Text>
                        <View style={[style.inputContainer, focusedInput === 'email' && style.inputContainerFocused]}>
                            <Feather name="mail" size={20} color={themes.colors.textSecondary} style={style.inputIcon} />
                            <TextInput
                                style={style.input}
                                placeholder="seuemail@exemplo.com"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                                onFocus={() => setFocusedInput('email')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </View>

                        {/* Campo de Senha */}
                        <Text style={style.inputLabel}>Senha</Text>
                        <View style={[style.inputContainer, focusedInput === 'senha' && style.inputContainerFocused]}>
                             <Feather name="lock" size={20} color={themes.colors.textSecondary} style={style.inputIcon} />
                            <TextInput
                                style={style.input}
                                placeholder="Crie uma senha segura"
                                secureTextEntry={!isPasswordVisible}
                                value={senha}
                                onChangeText={setSenha}
                                onFocus={() => setFocusedInput('senha')}
                                onBlur={() => setFocusedInput(null)}
                            />
                            <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={style.passwordToggle}>
                                <Feather name={isPasswordVisible ? "eye-off" : "eye"} size={20} color={themes.colors.textSecondary} />
                            </Pressable>
                        </View>

                        {/* Campo de Confirmar Senha */}
                        <Text style={style.inputLabel}>Confirme a Senha</Text>
                        <View style={[style.inputContainer, focusedInput === 'senhaConfirmada' && style.inputContainerFocused]}>
                             <Feather name="check-circle" size={20} color={themes.colors.textSecondary} style={style.inputIcon} />
                            <TextInput
                                style={style.input}
                                placeholder="Digite a senha novamente"
                                secureTextEntry={!isConfirmationPasswordVisible}
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