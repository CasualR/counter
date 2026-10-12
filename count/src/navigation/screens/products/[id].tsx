import { Text, View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { StaticScreenProps } from '@react-navigation/native';

type Props = StaticScreenProps<{ id: string, image: string, name: string }>;

export function ProductDetails({ route }: Props) {
  const { id, image, name } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image as ImageSourcePropType} style={{ width: 250, height: 200 }}></Image>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>Produkt: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingTop: 30,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20
  },
  text: {
    color: '#fff'
  }
});