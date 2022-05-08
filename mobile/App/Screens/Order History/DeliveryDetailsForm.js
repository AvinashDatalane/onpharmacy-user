import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import styles from './CheckoutPart1Styles';
import { Formik } from 'formik';

export default function DeliveryDetailsForm() {

  return (
    
    <View style={styles.form}>
      <Formik
        initialValues={{ FirstName: '', LastName: '', EmailID: '', Phone: '', Address: '', Town: '', State: '', Zip: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {props => (
          <View>
            <View style={styles.formtextContainer}>
                <Text style={styles.formtext}>First Name</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder='First Name'
              placeholderTextColor='#A9A9A9'
              onChangeText={props.handleChange('FirstName')}
              value={props.values.FirstName}
            />
            <View style={styles.formtextContainer}>
                <Text style={styles.formtext}>Last Name</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder='Last Name'
              placeholderTextColor='#A9A9A9'
              onChangeText={props.handleChange('LastName')}
              value={props.values.LastName}
            />
            <View style={styles.formtextContainer}>
                <Text style={styles.formtext}>Email Address</Text>
            </View>
            <TextInput 
              style={styles.input}
              placeholder='Email Address'
              placeholderTextColor='#A9A9A9'
              onChangeText={props.handleChange('EmailID')}
              value={props.values.EmailID}
            />
            <View style={styles.formtextContainer}>
                <Text style={styles.formtext}>Phone Number</Text>
            </View>
            <TextInput 
              style={styles.input}
              placeholder='Phone Number'
              placeholderTextColor='#A9A9A9'
              onChangeText={props.handleChange('Phone')}
              value={props.values.Phone}
              keyboardType='numeric'
            />
            <View style={styles.formtextContainer}>
                <Text style={styles.formtext}>Address</Text>
            </View>
            <TextInput 
              style={styles.input}
              placeholder='Address'
              placeholderTextColor='#A9A9A9'
              onChangeText={props.handleChange('Address')}
              value={props.values.Address}
            />
            <View style={styles.formtextContainer}>
                <Text style={styles.formtext}>Town / City</Text>
            </View>
            <TextInput 
              style={styles.input}
              placeholder='Town / City'
              placeholderTextColor='#A9A9A9'
              onChangeText={props.handleChange('Town')}
              value={props.values.Town}
            />
            <View style={styles.formtextContainer}>
                <Text style={styles.formtext}>State / Country</Text>
            </View>
            <TextInput 
              style={styles.input}
              placeholder='State / Country'
              placeholderTextColor='#A9A9A9'
              onChangeText={props.handleChange('State')}
              value={props.values.State}
            />
             <View style={styles.formtextContainer}>
                <Text style={styles.formtext}>Zip / Postal Code</Text>
            </View>
            <TextInput 
              style={styles.input}
              placeholder='Zip / Postal Code'
              placeholderTextColor='#A9A9A9'
              onChangeText={props.handleChange('Zip')}
              value={props.values.Zip}
              keyboardType='numeric'
            />
          </View>
        )}
      </Formik>
    </View>
    
  );
}