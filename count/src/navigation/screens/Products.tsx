import { Text } from '@react-navigation/elements';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
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
            <View key={product.id}>
              <Image source={ product.image as ImageSourcePropType } style={{ width: 250, height: 200 }}/>
              <Text style={styles.item}>{product.name}</Text>
              {/* <Link href={`products/${product.id}`}></Link> */}
            </View>
          );
        })}
      </View>
    </ScrollView>
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
  item: {

  }
});
