import { Text } from '@react-navigation/elements';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Link } from '@react-navigation/native';
import { productsList } from '../../assets/productsList';
import { ImageSourcePropType } from 'react-native';

export function Products() {
  console.log(productsList[1].image)

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text>Products Screen</Text>
      <View style={styles.row}>
        {productsList.map((product) => {
          return (
            <Link style={styles.item} screen="ProductDetails" params={{ id: String(product.id), image: String(product.image), name: String(product.name)  }} key={product.id}>
              <Image source={product.image as ImageSourcePropType} style={{ width: 250, height: 200 }} />
              <Text style={styles.item}>{product.name}</Text>
            </Link>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
});
