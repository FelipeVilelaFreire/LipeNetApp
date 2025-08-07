import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,Button } from 'react-native';
import { themes } from '../../src/global/themes';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { UserComponent } from '@/src/components/user';


export default function UploadScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <UserComponent />
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
  perfilButton: {
    position: "absolute",
    top: 20, 
    right: 20,
    padding: 10, 
  },
});