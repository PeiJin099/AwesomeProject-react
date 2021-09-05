import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

//React allows us to pass 
//information to a Component using something called props (stands for properties)
const CarItem = (props) => {
    return (
       
        <View style={styles.carcontainer}>
          <ImageBackground 
          source={require('./assets/images/ModelX.jpeg')} 
          style={styles.image}
          />
  
          <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at $69,420</Text>
          </View>
        </View>
    );
};

export default CarItem;
