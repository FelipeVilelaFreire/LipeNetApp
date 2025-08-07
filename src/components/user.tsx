import { View, Text, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { themes } from '../global/themes';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export function UserComponent(){
    const router = useRouter();
    return(
      <TouchableOpacity
              style={styles.perfilButton}
              onPress={() => router.push('/perfil')}
            >
              <FontAwesome name="user-circle" size={28} color={themes.colors.primary} />
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  perfilButton: {
    position: "absolute",
    top: 20, 
    right: 20,
    padding: 10, 
  },
});