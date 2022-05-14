import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, TouchableOpacity } from 'react-native';
import styles from './NewBranchStyles';
import { Formik } from 'formik';

export default function NewBranchForm() {

    return (


        <Formik
            initialValues={{ Name: '', Address: '', Description: '', EmailID: '' }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {props => (
                <View style={styles.formDiv}>
                    <View style={styles.formHeading}>
                        <Text style={styles.formHeadingText}>
                            Branch Information
                        </Text>
                    </View>
                    <View style={styles.formtextContainer}>
                        <Text style={styles.formtext}>Name</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='Name'
                        placeholderTextColor='#626262'
                        onChangeText={props.handleChange('Name')}
                        value={props.values.Name}
                    />
                    <View style={styles.formtextContainer}>
                        <Text style={styles.formtext}>Address</Text>
                    </View>
                    <TextInput
                        style={styles.input}
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
                    <View style={styles.formHeading}>
                        <Text style={styles.formHeadingText}>
                            Branch Admin
                        </Text>
                    </View>
                    <View style={styles.formtextContainer}>
                        <Text style={styles.formtext}>User Email</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='davedhruv1201@gmail.com'
                        placeholderTextColor='#626262'
                        onChangeText={props.handleChange('EmailID')}
                        value={props.values.EmailID}
                    />
                    <TouchableOpacity>
                        <View style={styles.Invite}>
                            <Text style={styles.InviteText}>Invite User</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>



    );
}