// app/(tabs)/person.tsx
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { themes } from '../../src/global/themes';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function PersonScreen() {
  const router = useRouter();

  const handleLogout = () => {

    router.replace('/');  
  };

  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={100} color={themes.colors.primary} />
      <Text style={styles.title}>Meu Perfil</Text>
      <Text style={styles.subtitle}>emaildousuario@exemplo.com</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Editar Perfil" onPress={() => {}} />
        <View style={{marginTop: 10}}>
          <Button title="Sair (Logout)" color={themes.colors.error} onPress={handleLogout} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: themes.spacing.large,
    backgroundColor: themes.colors.background,
  },
  title: {
    fontSize: themes.typography.h1,
    fontWeight: 'bold',
    color: themes.colors.text,
    marginTop: themes.spacing.medium,
  },
  subtitle: {
    fontSize: themes.typography.body,
    color: themes.colors.textSecondary,
    marginBottom: themes.spacing.xlarge,
  },
  buttonContainer: {
    width: '80%',
  }
});