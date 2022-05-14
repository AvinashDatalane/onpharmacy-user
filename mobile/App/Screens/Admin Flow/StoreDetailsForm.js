import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import styles from './RequestStoreStyles';
import { Formik } from 'formik';

export default function StoreDetailsForm() {

    return (

        <View style={styles.formDiv}>
            <Formik
                initialValues={{ FirstName: '', LastName: '', EmailID: '', Phone: '', Address: '', Description: '' }}
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
                            placeholderTextColor='#626262'
                            onChangeText={props.handleChange('FirstName')}
                            value={props.values.FirstName}
                        />
                        <View style={styles.formtextContainer}>
                            <Text style={styles.formtext}>Last Name</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='Last Name'
                            placeholderTextColor='#626262'
                            onChangeText={props.handleChange('LastName')}
                            value={props.values.LastName}
                        />
                        <View style={styles.formtextContainer}>
                            <Text style={styles.formtext}>Email Address</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='davedhruv1201@gmail.com'
                            placeholderTextColor='#626262'
                            onChangeText={props.handleChange('EmailID')}
                            value={props.values.EmailID}
                        />
                        <View style={styles.formtextContainer}>
                            <Text style={styles.formtext}>Phone Number</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='+91 90330 17749 '
                            placeholderTextColor='#626262'
                            onChangeText={props.handleChange('Phone')}
                            value={props.values.Phone}
                            keyboardType='numeric'
                        />
                        <View style={styles.formtextContainer}>
                            <Text style={styles.formtext}>Address</Text>
                        </View>
                        <TextInput
                            style={styles.inputBig}
                            placeholder='Address'
                            placeholderTextColor='#626262'
                            onChangeText={props.handleChange('Address')}
                            value={props.values.Address}
                        />
                        <View style={styles.formtextContainer}>
                            <Text style={styles.formtext}>Description</Text>
                        </View>
                        <TextInput
                            style={styles.inputBig}
                            placeholder='Description'
                            placeholderTextColor='#626262'
                            onChangeText={props.handleChange('Description')}
                            value={props.values.Address}
                        />


                    </View>
                )}
            </Formik>
        </View>

    );
}