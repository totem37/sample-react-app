import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import axios from 'axios';

import FormField from './FormField';

const API_URL = 'https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit'

function ContactForm() {

    const [numPhoneNumbers, setNumPhoneNumbers] = useState(1);
    const [success, setSuccess] = useState(false);

    return(
        <div>
            <h2 className="Pages-">Contact us</h2>
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>

            {success ? (
                <div className="Pages-contactsuccessdiv">
                    <img src="Icon_Valid.svg" alt="Success" className="Pages-contactsuccessimage"/>
                    <h2 className="Pages-h2">Your message has been sent</h2>
                    <p>We will be in contact with you within 24 hours.</p>
                </div>
            ) : (
                <Formik
                initialValues={{"FullName": "", "EmailAddress": "", "Message": "", "PhoneNumbers": [""]}}
                validate={(values) => {
                    const errors = {};
                    if (!values.EmailAddress) {
                        errors.EmailAddress = 'Required';
                    } else if (!values.FullName) {
                        errors.FullName = 'Required';
                    } else if (!values.Message) {
                        errors.Message = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.EmailAddress)) {
                        errors.EmailAddress = 'Invalid email address';
                    } else if (values.Message.length > 500) {
                        errors.Message = 'Maximum text length is 500 characters';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        values.PhoneNumbers = [];
                        Object.keys(values).filter(function(i) {return i.includes("phone")}).forEach(k => {
                            values.PhoneNumbers.push(values[k]);
                        });
                        axios.post(API_URL, values).then((response) => {
                            console.log(response.data);
                            console.log(response.status);
                            if (response.status == 200) {
                                setSuccess(true);
                            }
                        });
                    }, 400);
                }}>
                    {({values, isSubmitting}) => (
                        <Form>
                            <div className="Pages-contactforminputdiv">
                                <FormField fieldName="FullName" fieldType="text" fieldDisplayName="Full name" required={true} small={true}/>
                                <br/>
                                <FormField fieldName="EmailAddress" fieldType="email" fieldDisplayName="Email address" required={true} small={true}/>
                            </div>
                            <br/>

                            <FieldArray
                            type="number"
                            name="PhoneNumbers"
                            render={({push}) => (
                                <div>
                                {values.PhoneNumbers.map((v, index) => {return(
                                    <>
                                        <FormField fieldName={"phone"+(index+1)} fieldType="number" fieldDisplayName={"Phone number "+(index+1)} required={false} small={false}/>
                                        <br/>
                                    </>
                                );})}
                                <p className="Pages-addphonebutton" onClick={function() {setNumPhoneNumbers(numPhoneNumbers + 1); push('');}}>Add new phone number</p>
                                <br/>
                                </div>
                            )}/>

                            <p>Message<span className="Pages-graytext"><i> - Maximum text length is 500 characters</i></span></p>
                            <Field type="text" name="Message" className="Pages-contactmessageinput"/>
                            <ErrorMessage name="Message" component="div" />
                            <br/>

                            <div className="Pages-contactdiv">
                                <Field name="addresscheckbox" type="checkbox"/>
                                <p><b>Add address details</b></p>
                            </div>
                            <br/>

                            <div className="Pages-contactsubmitdiv" disabled={isSubmitting}>
                                <img src="Icon_Submit.svg" alt="Submit" className="Pages-contactsubmitimage"/>
                                <Field type="submit" name="submit" className="Pages-submitbutton" />
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
}

export default ContactForm;