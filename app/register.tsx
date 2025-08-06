// app/index.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react'; // Trocamos useFocusEffect por useEffect
import { useRouter } from 'expo-router'; // Importamos o hook para navegação
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Animated,
    KeyboardAvoidingView,
    Platform,
    Pressable
} from 'react-native';
import { style } from "./style"; // Assumindo que style.ts está na mesma pasta
import { themes } from "../src/global/themes"; // Ajuste o caminho se necessário
import { Feather } from '@expo/vector-icons';

export default function LoginScreen() { // Renomeado para mais clareza
    // --- Hooks de Estado (perfeitos, sem alterações) ---
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaconfirmada, setSenhaconfirmada] = useState("");
    const [error, setError] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [focusedInput, setFocusedInput] = useState<null | 'email' | 'senha'>(null);

    const router = useRouter();

    const fadeAnim = useRef(new Animated.Value(0)).current;

    // Usamos useEffect com array vazio. A animação rodará uma vez quando a tela montar.
    // Como esta é a primeira tela de um Stack, é mais apropriado que useFocusEffect.
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);

    // --- Funções de Ação ---
    const handleRegister = () => {
        setError("");
        if (!email || !senha) {
            setError("Por favor, preencha todos os campos.");
            return;
        }
        if (senha != senhaconfirmada) {
            setError("Por favor, preencha todos os campos.");
            return;
        }
        // Navegação para a aba de login
        router.replace('/');
    };

    return (
        <KeyboardAvoidingView
            style={style.keyboardView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Animated.View style={[style.container, { opacity: fadeAnim }]}>
                
                <View style={style.mainContent}>
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

                        <Text style={style.inputLabel}>Confirme a senha</Text>
                        <View style={[style.inputContainer, focusedInput === 'senha' && style.inputContainerFocused]}>
                             <Feather name="lock" size={20} color={themes.colors.textSecondary} style={style.inputIcon} />
                            <TextInput
                                style={style.input}
                                placeholder="Confirme sua senha secreta"
                                placeholderTextColor={themes.colors.textSecondary}
                                secureTextEntry={!isPasswordVisible}
                                autoCapitalize="none"
                                value={senha}
                                onChangeText={setSenhaconfirmada}
                                onFocus={() => setFocusedInput('senha')}
                                onBlur={() => setFocusedInput(null)}
                            />
                            <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={style.passwordToggle}>
                                <Feather name={isPasswordVisible ? "eye-off" : "eye"} size={20} color={themes.colors.textSecondary} />
                            </Pressable>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={style.registerButton} activeOpacity={0.8} onPress={handleRegister}>
                    <Text style={style.registerButtonText}>Registre-se</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
}