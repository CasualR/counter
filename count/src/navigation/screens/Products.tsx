import { Text } from '@react-navigation/elements';
import { StyleSheet, View, Image } from 'react-native';
import productsList from "../../assets/productsList.js"

export function Products() {
  console.log(productsList[0].image)

  return (
    <View style={styles.container}>
      <Text>Products Screen</Text>
      {productsList.map((product) => {
        return (
          <View>
            <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }}/>
            <Text style={styles.item}>{product.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  item: {

  }
});
