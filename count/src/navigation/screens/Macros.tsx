import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function Macros() {
  return (
    <View style={styles.container}>
      <Text>Macros</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
});