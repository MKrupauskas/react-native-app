import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default class ProductList extends React.Component {
  render() {
    const items = [
      { title: 'title', description: 'description' },
      { title: 'title', description: 'description' },
      { title: 'title', description: 'description' },
      { title: 'title', description: 'description' },
      { title: 'title', description: 'description' },
      { title: 'title', description: 'description' },
      { title: 'title', description: 'description' },
      { title: 'title', description: 'description' },
      { title: 'title', description: 'description' },
      { title: 'title', description: 'description' }
    ];

    return (
      <ScrollView style={styles.productList}>
        {items.map((item, index) => {
          const { title, description } = item;
          return (
            <View style={styles.product} key={index}>
              <Text>{title}</Text>
              <Text>{description}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = {
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 100,
    marginBottom: 90,
    backgroundColor: 'red'
  },
  product: {
    borderWidth: 1,
    borderColor: '#ddd'
  }
};
