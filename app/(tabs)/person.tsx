// app/(tabs)/person.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { themes } from '../../src/global/themes';

// Simular os membros da família
const familyMembers = [
  { id: '1', name: 'João Silva', profilePictureUrl: 'https://picsum.photos/seed/1/200' },
  { id: '2', name: 'Maria Oliveira', profilePictureUrl: 'https://picsum.photos/seed/2/200' },
  { id: '3', name: 'Carlos Pereira', profilePictureUrl: 'https://picsum.photos/seed/3/200' },
  { id: '4', name: 'Ana Souza', profilePictureUrl: 'https://picsum.photos/seed/4/200' },
  { id: '5', name: 'Pedro Santos', profilePictureUrl: 'https://picsum.photos/seed/5/200' },
  { id: '6', name: 'Lúcia Costa', profilePictureUrl: 'https://picsum.photos/seed/6/200' },
];
// Componente para renderizar cada item da lista (boa prática)
const PersonCard = ({ item }) => {
  const router = useRouter();

  const handlePress = () => {
    console.log(`Navegando para o perfil de ${item.name} com ID: ${item.id}`);
    alert(`Você clicou no perfil de ${item.name}`);
  };

  return ( //Deixar a imagem oculta
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <Image source={{ uri: item.profilePictureUrl }} style={styles.profileImage} />
      <Text style={styles.personName}>{item.name}</Text>
    </TouchableOpacity>
  );
};


export default function PersonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Membros da Família</Text>
      
      {/* Usando FlatList para renderizar a lista de pessoas */}
      <FlatList
        data={familyMembers}
        renderItem={({ item }) => <PersonCard item={item} />}
        keyExtractor={item => item.id}
        numColumns={2} // Organiza a lista em duas colunas, criando um grid
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, // Espaço para o cabeçalho (se houver)
    paddingHorizontal: themes.spacing.medium,
    backgroundColor: themes.colors.background,
  },
  title: {
    fontSize: themes.typography.h1,
    fontWeight: 'bold',
    color: themes.colors.text,
    marginBottom: themes.spacing.large,
    paddingHorizontal: themes.spacing.small,
  },
  listContainer: {
    alignItems: 'center',
    gap: 5,
  },
  cardContainer: {
    alignItems: 'center',
    margin: themes.spacing.small,
    width: 150, // Largura fixa para cada card
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Deixa a imagem redonda
    marginBottom: themes.spacing.medium,
  },
  personName: {
    fontSize: themes.typography.body,
    fontWeight: '600',
    color: themes.colors.text,
  },
});