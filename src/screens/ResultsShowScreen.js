import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Button, Image, FlatList } from 'react-native';

import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getResult = async (id) => {
    try {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        //console.log(result);
    } catch (err) {
        setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
      getResult(id);
  }, []);

  if (!result) {
    if (errorMessage){
      <Text>{errorMessage}</Text>;
    } else {
      return null;
    }
  }

  return (<View>
            <Text>{result.name}</Text>
            <FlatList
              data={result.photos}
              keyExtractor={(photo) => photo}
              renderItem={({ item }) => {
                return (
                  <Image style={styles.image} source={{ uri: item}} />
                )
              }}
            />
        </View>
  );

};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    //borderRadius: 4,
    //marginBottom: 5,
  },
});

export default ResultsShowScreen;
