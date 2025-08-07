// app/(tabs)/person.tsx
import { View, Text, StyleSheet, Button } from 'react-native';
import { themes } from '../../src/global/themes';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={100} color={themes.colors.primary} />
      <Text style={styles.title}>Home</Text>
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