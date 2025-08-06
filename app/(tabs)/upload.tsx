// app/(tabs)/upload.tsx
import { View, Text, StyleSheet, Button } from 'react-native';
import { themes } from '../../src/global/themes';
import { Ionicons } from '@expo/vector-icons';

export default function UploadScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="cloud-upload-outline" size={80} color={themes.colors.primary} />
      <Text style={styles.title}>Enviar Mídia</Text>
      <Text style={styles.subtitle}>Escolha uma foto ou vídeo da sua galeria para compartilhar com a família.</Text>
      <Button title="Selecionar Arquivo" onPress={() => alert('Abrir galeria de fotos!')} />
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
    marginTop: themes.spacing.small,
    marginBottom: themes.spacing.xlarge,
    textAlign: 'center',
  },
});