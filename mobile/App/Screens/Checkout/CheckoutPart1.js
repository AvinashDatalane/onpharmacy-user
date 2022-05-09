// @flow
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './CheckoutPart1Styles';
import ImageCarousel from '../../Componenets/imageCarousel';
import {homePage} from '../../data';
import icons from '../../Assets/Icons/icons';
import DeliveryDetailsForm from './DeliveryDetailsForm';


const CheckoutPart1 = (props: Props) => {
    const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.headerContainer}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerIcon}>
                <Image source={icons.back} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Payment Option</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.form}>
          <DeliveryDetailsForm />
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Next -></Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutPart1;
