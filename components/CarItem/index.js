import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyleButton from "../StyleButton";
import styles from './styles';

//React allows us to pass 
//information to a Component using something called props (stands for properties)
const CarItem = (props) => {
    return (
       
      <View style={styles.carcontainer}>
        <ImageBackground 
        source={require('../../assets/images/ModelX.jpeg')} 
        style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <StyleButton 
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom order was pressed");
          }}
        />

        <StyleButton 
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
        
      </View>

        
    );
};

export default CarItem;
