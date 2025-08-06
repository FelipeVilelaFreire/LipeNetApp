// app/(tabs)/style.ts
import { StyleSheet } from "react-native";
import { themes } from "../src/global/themes";

export const style = StyleSheet.create({
    // --- Containers ---
    keyboardView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: themes.colors.background,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: themes.spacing.large,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: themes.spacing.xlarge,
    },
    formContainer: {
        width: '100%',
    },

    // --- Elementos de Texto ---
    logo: {
        fontSize: themes.typography.logoSize,
        fontWeight: 'bold',
        color: themes.colors.primary,
        marginBottom: themes.spacing.small,
    },
    welcomeText: {
        fontSize: themes.typography.h2,
        color: themes.colors.text,
        marginBottom: themes.spacing.large,
    },
    inputLabel: {
        fontSize: themes.typography.label,
        color: themes.colors.textSecondary,
        marginBottom: themes.spacing.small,
        marginLeft: themes.spacing.small,
    },

    // --- Inputs e Formulário ---
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: themes.colors.white,
        borderWidth: 1,
        borderColor: themes.colors.border,
        borderRadius: themes.radius.medium,
        marginBottom: themes.spacing.medium,
    },
    inputContainerFocused: {
        borderColor: themes.colors.primary,
        shadowColor: themes.colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    inputIcon: {
        paddingHorizontal: themes.spacing.medium,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: themes.typography.body,
        color: themes.colors.text,
    },
    passwordToggle: {
        padding: themes.spacing.small,
    },
    
    // --- Mensagem de Erro ---
    errorText: {
        color: themes.colors.error,
        marginBottom: themes.spacing.medium,
        textAlign: 'center',
        fontWeight: '600',
    },

    // --- Botões ---
    button: { // Botão principal "Entrar"
        backgroundColor: themes.colors.primary,
        padding: themes.spacing.medium_small,
        borderRadius: themes.radius.medium,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: themes.spacing.small,
    },
    buttonText: { // Texto do botão principal
        color: themes.colors.white,
        fontSize: themes.typography.body,
        fontWeight: 'bold',
    },
    registerButton: { // Botão secundário "Registre-se"
        backgroundColor: themes.colors.white,
        padding: themes.spacing.medium_small,
        borderRadius: themes.radius.medium,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 3,
        borderWidth: 1,
        borderColor: themes.colors.primary,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.0,
        elevation: 3,
    },
    registerButtonText: { // Texto do botão secundário
        color: themes.colors.primary,
        fontSize: themes.typography.body,
        fontWeight: 'bold',
    },

    buttonEntrarRegistrar:{
        gap:50,
    },
    mainContent: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContainer: {
        width: '100%',
        marginTop: 'auto', // Truque para empurrar para o final
        paddingBottom: 40, // Espaço na parte de baixo
    },
});