import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import FormField from './FormField';

function ContactForm() {

    const [numPhoneNumbers, setNumPhoneNumbers] = useState(1);

    function addPhoneNumber() {
        setNumPhoneNumbers(numPhoneNumbers + 1);
    }

    return(
        <div>
            <h2 className="Pages-">Contact us</h2>
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>

            <Formik
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!values.name) {
                    errors.name = 'Required';
                } else if (!values.message) {
                    errors.message = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                } else if (values.message.length > 500) {
                    errors.message = 'Maximum text length is 500 characters';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="Pages-contactforminputdiv">
                            <FormField fieldName="name" fieldType="text" fieldDisplayName="Full name" required={true} small={true}/>
                            <br/>
                            <FormField fieldName="email" fieldType="email" fieldDisplayName="Email address" required={true} small={true}/>
                        </div>
                        <br/>

                        {Array(numPhoneNumbers).forEach(
                            function (i) {
                                return(
                                    <>
                                        <FormField fieldName={"phone"+i.toString()} fieldType="number" fieldDisplayName={"Phone number "+i.toString()} required={false} small={false}/>
                                        <br/>
                                    </>
                                );
                            }
                        )}

                        <p className="Pages-addphonebutton" onClick={addPhoneNumber()}>Add new phone number</p>
                        <br/>

                        <p>Message<span className="Pages-graytext"><i> - Maximum text length is 500 characters</i></span></p>
                        <Field type="text" name="message" className="Pages-contactmessageinput"/>
                        <ErrorMessage name="message" component="div" />
                        <br/>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;