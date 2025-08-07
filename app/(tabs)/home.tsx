// app/(tabs)/person.tsx
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { themes } from '../../src/global/themes';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function GalleryScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.perfilButton}
        onPress={() => router.push('/perfil')}
      >
        <FontAwesome name="user-circle" size={28} color={themes.colors.primary} />
      </TouchableOpacity>
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
  },
  perfilButton: {
    position: "absolute",
    top: 20, 
    right: 20,
    padding: 10, 
  },
});