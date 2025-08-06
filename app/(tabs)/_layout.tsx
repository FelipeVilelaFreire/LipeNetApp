import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { themes } from '../../src/global/themes'; // Verifique se este caminho está correto

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themes.colors.primary,
        tabBarInactiveTintColor: themes.colors.textSecondary,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: 'center',
          height: '100%',
          padding:10, 
        },
        tabBarStyle: {
          backgroundColor: themes.colors.white,
          height: 60,
          borderTopWidth: 1,
          borderTopColor: themes.colors.border,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Galeria',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "images" : "images-outline"} color={color} size={32} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "search" : "search-outline"} color={color} size={32} />
          ),
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          title: 'Enviar',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "cloud-upload" : "cloud-upload-outline"} color={color} size={32} />
          ),
        }}
      />
      <Tabs.Screen
        name="person"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} color={color} size={32} />
          ),
        }}
      />
    </Tabs>
  );
}