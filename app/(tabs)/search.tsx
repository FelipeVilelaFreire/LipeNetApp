// app/(tabs)/search.tsx
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { themes } from '../../src/global/themes';
import { Feather } from '@expo/vector-icons';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar</Text>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color={themes.colors.textSecondary} style={styles.searchIcon} />
        <TextInput
          placeholder="Procure por fotos, vídeos ou pessoas..."
          style={styles.input}
          placeholderTextColor={themes.colors.textSecondary}
        />
      </View>
      <Text style={styles.tip}>Ainda não há resultados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: themes.spacing.large,
    backgroundColor: themes.colors.background,
  },
  title: {
    fontSize: themes.typography.h1,
    fontWeight: 'bold',
    color: themes.colors.text,
    marginBottom: themes.spacing.large,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themes.colors.white,
    borderRadius: themes.radius.medium,
    borderWidth: 1,
    borderColor: themes.colors.border,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  tip: {
    marginTop: themes.spacing.large,
    textAlign: 'center',
    color: themes.colors.textSecondary,
  }
});