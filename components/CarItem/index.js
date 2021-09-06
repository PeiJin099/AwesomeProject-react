import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyleButton from "../StyleButton";
import styles from './styles';

//React allows us to pass 
//information to a Component using something called props (stands for properties)
const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props;

    return (
       
      <View style={styles.carcontainer}>
        <ImageBackground 
        // source={require('../../assets/images/ModelX.jpeg')} 
        source={image} 
        style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline} {''}
            <Text style={styles.subtitleCTA}> 
            {taglineCTA}</Text>
            </Text>
        </View>

        <View style ={styles.buttonsContainer}>
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
       
      </View>
        
    );
};

export default CarItem;
