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
import styles from './CheckoutPart2Styles';
import ImageCarousel from '../../Componenets/imageCarousel';
import {homePage} from '../../data';
import icons from '../../Assets/Icons/icons';
import DeliveryDetailsForm from './DeliveryDetailsForm';


const CheckoutPart2 = (props: Props) => {
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
        <View style={styles.form}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Delivery Method</Text>
                <Text style={styles.subtitle}>Please choose a delivery method</Text>
            </View>
            <View style={styles.optionContainer}>
                <Image source={icons.circleCheck} />
                <Text style={styles.company}>FedEx</Text>
                <Text style={styles.price}>+32 USD</Text>
                <Text style={styles.text}>Additional price</Text>
                <Image source={icons.fedEx} style={styles.companyIcon}/>
            </View>
            <View style={styles.option2Container}>
                <Image source={icons.circleCheck} />
                <Text style={styles.company}>DHL</Text>
                <Text style={styles.price}>+15 USD</Text>
                <Text style={styles.text}>Additional price</Text>
                <Image source={icons.dhl} style={styles.companyIcon}/>
            </View>
        </View>
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

export default CheckoutPart2;
