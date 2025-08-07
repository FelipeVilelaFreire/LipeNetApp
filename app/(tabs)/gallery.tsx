// app/(tabs)/person.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { themes } from '../../src/global/themes';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {UserComponent} from "../../src/components/user";

// O nome da função deve corresponder ao propósito da tela
export default function PersonScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <UserComponent/>
      <Ionicons name="image-outline" size={100} color={themes.colors.primary} />
      <Text style={styles.title}>Minha Galeria</Text>
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

});