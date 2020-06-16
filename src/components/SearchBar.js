import React from 'react';
import { TextInput, StyleSheet, View, Button, Image } from 'react-native';

import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {

    return (<View style={styles.backgroundStyle}>
                <Feather name="search" style={styles.iconStyle} />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    placeholder= "Search"
                    value={term}
                    onChangeText={onTermChange}// the same as: onChangeText={newTerm => onTermChange(newTerm)}
                    onEndEditing={onTermSubmit}//the same as: onEndEditing={() => onTermSubmit()}
                />
            </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    inputStyle: {
        //borderColor: 'black',
        //borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;
