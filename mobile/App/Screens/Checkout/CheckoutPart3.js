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
import styles from './CheckoutPart3Styles';
import ImageCarousel from '../../Componenets/imageCarousel';
import {homePage} from '../../data';
import icons from '../../Assets/Icons/icons';
import DeliveryDetailsForm from './DeliveryDetailsForm';
import {Formik} from 'formik';


const CheckoutPart3 = (props: Props) => {
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
                <Text style={styles.title}>Payment Method</Text>
                <Text style={styles.subtitle}>Please enter your payment method</Text>
            </View>
            <View style={styles.optionContainer}>
                <View style={styles.squareCheck}><Image source={icons.tick}/></View>
                <Text style={styles.company}>Credit Card</Text>
                <Image source={icons.creditCard} style={styles.cards}/>
            </View>
            <Formik
              initialValues={{ FirstName: '', LastName: '', EmailID: '', Phone: '', Address: '', Town: '', State: '', Zip: '' }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
            {props => (
              <View>
                <View style={styles.formtextContainer}>
                    <Text style={styles.formtext}>Card Number</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder='Card Number'
                  placeholderTextColor='#A9A9A9'
                  onChangeText={props.handleChange('CardNumber')}
                  value={props.values.FirstName}
                  keyboardType='numeric'
                />
                <View style={styles.formtextContainer}>
                    <Text style={styles.formtext}>Card Holder</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder='Card Holder'
                  placeholderTextColor='#A9A9A9'
                  onChangeText={props.handleChange('CardHolder')}
                  value={props.values.FirstName}
                />
                <View>
                  <View style={styles.formtextContainer}>
                      <Text style={styles.formtext}>Expiration Date</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder='Expiration Date'
                    placeholderTextColor='#A9A9A9'
                    onChangeText={props.handleChange('Expiry')}
                    value={props.values.FirstName}
                  />
                  <View style={styles.formtextContainer}>
                      <Text style={styles.formtext}>CVC</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder='CVC'
                    placeholderTextColor='#A9A9A9'
                    onChangeText={props.handleChange('CVC')}
                    value={props.values.FirstName}
                    keyboardType='numeric'
                  />
                </View>
              </View>
            )}
            </Formik>
        </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('CheckoutPart4')}>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Next -></Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutPart3;
