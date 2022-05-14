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
import styles from './CheckoutPart4Styles';
import ImageCarousel from '../../Componenets/imageCarousel';
import {homePage} from '../../data';
import icons from '../../Assets/Icons/icons';
import DeliveryDetailsForm from './DeliveryDetailsForm';
import {Formik} from 'formik';

const CheckoutPart4 = (props: Props) => {
    const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.headerContainer}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerIcon} onPress={() => props.navigation.goBack()}>
                <Image source={icons.back} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Payment Option</Text>
        </View>
      </View>
        <View style={styles.form}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Additional Information</Text>
                <Text style={styles.subtitle}>Need something else? We will make it for you!</Text>
            </View>
            <Formik
              initialValues={{ OrderNotes: ''}}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
            {props => (
              <View>
                <View style={styles.formtextContainer}>
                    <Text style={styles.formtext}>Order Notes</Text>
                </View>
                <TextInput
                  multiline
                  style={styles.input}
                  placeholder='Need a specific delivery day? Sending a gift? Let’s say ...'
                  placeholderTextColor='#A9A9A9'
                  onChangeText={props.handleChange('OrderNotes')}
                  value={props.values.OrderNotes}
                />
              </View>
            )}
            </Formik>
            <View style={styles.title2Container}>
                <Text style={styles.title}>Confirmation</Text>
                <Text style={styles.subtitle}>We are getting to the end. Just a few clicks and your order is ready!</Text>
            </View>
            <View style={styles.delivercheck}>
              <View style={styles.squareCheck}></View>
              <Text style={styles.deliverchecktext}> I agree with sending Marketing and Newsletter emails.</Text>
            </View>
            <View style={styles.delivercheck2}>
              <View style={styles.squareCheck}></View>
              <Text style={styles.deliverchecktext}> I agree with our terms and conditions and privacy policy.</Text>
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

export default CheckoutPart4;
