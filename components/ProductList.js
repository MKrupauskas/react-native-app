import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import {
  View as UIView,
  TextInput as UITextInput,
  Text as UIText,
  Button as UIButton
} from 'react-native-ui-lib';

export default class ProductList extends React.Component {
  render() {
    const items = [
      { name: 'Richard Jefferson', description: 'description' },
      { name: 'Richard Jefferson', description: 'description' },
      { name: 'Richard Jefferson', description: 'description' },
      { name: 'Richard Jefferson', description: 'description' },
      { name: 'Richard Jefferson', description: 'description' },
      { name: 'Richard Jefferson', description: 'description' }
    ];

    return (
      <ScrollView style={styles.productList}>
        {items.map((item, index) => {
          let { name, description } = item;
          return (
            <View style={styles.product} key={index}>
              <UIButton
                link
                onPress={() => {
                  name = 'YYOU CLICKED MEEE';
                }}
              >
                <UIText blue50 text20>
                  {name}
                </UIText>
                <UIText>{description}</UIText>
                <UIButton link text70 orange30 label=">" marginT-20 />
              </UIButton>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = {
  productList: {
    height: 100,
    marginBottom: 90
  },
  product: {
    display: 'flex',
    // alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: '#ddd'
  }
};
