import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import axios from 'axios';

import FormField from './FormField';
import ScreenSize from "./ScreenSize";

import "../pages/pages.css";
import "../pages/pages-mobile.css";

const BASE_URL = 'https://interview-assessment.api.avamae.co.uk'

function ContactForm() {
    const mobile = ScreenSize() === 's';

    const [numPhoneNumbers, setNumPhoneNumbers] = useState(1);
    const [includeAddress, setIncludeAddress] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function changeAddress() {
        setIncludeAddress(!includeAddress);
    }

    return(
        <div>
            <h2 className={mobile?"Pagesmobile-abouth2":"Pages-h2"}>Contact us</h2>
            <p className={mobile?"Pagesmobile-text":""}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>

            {success ? (
                <div className={mobile?"Pagesmobile-contactsuccessdiv":"Pages-contactsuccessdiv"}>
                    <img src="Icon_Valid.svg" alt="Success" className="Pages-contactsuccessimage"/>
                    <h2 className={mobile?"Pagesmobile-h4":"Pages-h2"}>Your message has been sent</h2>
                    <p className={mobile?"Pagesmobile-centertext":"Pages-text"}>We will be in contact with you within 24 hours.</p>
                </div>
            ) : errorMessage !== "" ? (
                <div className={mobile?"Pagesmobile-contactfailurediv":"Pages-contactfailurediv"}>
                    <h2 className={mobile?"Pagesmobile-h4":"Pages-h2"}>Error</h2>
                    <p className={mobile?"Pagesmobile-centertext":"Pages-text"}>{errorMessage}</p>
                </div>
            ) : (
                <Formik
                initialValues={{
                    "FullName": "",
                    "EmailAddress": "",
                    "Message": "",
                    "PhoneNumbers": [""],
                    "bIncludeAddressDetails": false,
                    "addressDetails": {
                        "AddressLine1": "",
                        "AddressLine2": "",
                        "CityTown": "",
                        "StateCounty": "",
                        "Postcode": "",
                        "Country": ""
                    }}}
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
                    } else if (values.bIncludeAddressDetails) {
                        if (!values.AddressLine1) {
                            errors.AddressLine1 = 'Required if including address details';
                        } else if (!values.CityTown) {
                            errors.CityTown = 'Required if including address details';
                        } else if (!values.StateCounty) {
                            errors.StateCounty = 'Required if including address details';
                        } else if (!values.Postcode) {
                            errors.Postcode = 'Required if including address details';
                        } else if (!values.Country) {
                            errors.Country = 'Required if including address details';
                        }
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
                        const addressFields = ["AddressLine1", "AddressLine2", "CityTown", "StateCounty", "Postcode", "Country"];
                        addressFields.forEach(function(item) {values.addressDetails[item] = values[item]});
                        console.log(values);
                        axios.post(BASE_URL + '/api/v1/contact-us/submit', values).then((response) => {
                            if (response.status === 200) {
                                setSuccess(true);
                            } else {
                                setErrorMessage(response.data.Errors[0].MessageCode);
                            }
                        }).catch((error) => {
                            setErrorMessage(error.response.data.Errors[0].MessageCode);
                        });
                    }, 400);
                }}>
                    {({values, isSubmitting}) => (
                        <Form className={mobile?"Pagesmobile-form":""}>
                            {mobile ? (
                                <>
                                    <FormField fieldName="FullName" fieldType="text" fieldDisplayName="Full name" required={true} small={false}/>
                                    <br/>
                                    <FormField fieldName="EmailAddress" fieldType="email" fieldDisplayName="Email address" required={true} small={false}/>
                                </>
                            ) : (
                                <div className="Pages-contactforminputdiv">
                                    <FormField fieldName="FullName" fieldType="text" fieldDisplayName="Full name" required={true} small={true}/>
                                    <br/>
                                    <FormField fieldName="EmailAddress" fieldType="email" fieldDisplayName="Email address" required={true} small={true}/>
                                </div>
                            )}
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
                                <p className={mobile?"Pagesmobile-addphonebutton":"Pages-addphonebutton"} onClick={function() {setNumPhoneNumbers(numPhoneNumbers + 1); push('');}}>Add new phone number</p>
                                <br/>
                                </div>
                            )}/>

                            <p className={mobile?"Pagesmobile-text":""}>Message<span className="Pages-graytext"><i> - Maximum text length is 500 characters</i></span></p>
                            <Field type="text" name="Message" className={mobile?"Pagesmobile-contactmessageinput":"Pages-contactmessageinput"}/>
                            <ErrorMessage name="Message" component="div" />
                            <br/>

                            <div className="Pages-contactdiv">
                                <Field name="bIncludeAddressDetails" type="checkbox" className={mobile?"Pagesmobile-checkbox":""} onClick={changeAddress}/>
                                <p className={mobile?"Pagesmobile-text":""}><b>Add address details</b></p>
                            </div>
                            <br/>

                            {includeAddress && (
                                <>
                                {mobile ? (
                                    <>
                                        <FormField fieldName="AddressLine1" fieldType="text" fieldDisplayName="Address line 1" required={includeAddress} small={false}/>
                                        <br/>
                                        <FormField fieldName="AddressLine2" fieldType="text" fieldDisplayName="Address line 2" required={false} small={false}/>
                                    </>
                                ) : (
                                    <div className="Pages-contactforminputdiv">
                                        <FormField fieldName="AddressLine1" fieldType="text" fieldDisplayName="Address line 1" required={includeAddress} small={true}/>
                                        <br/>
                                        <FormField fieldName="AddressLine2" fieldType="text" fieldDisplayName="Address line 2" required={false} small={true}/>
                                    </div>
                                )}
                                <br/>

                                {mobile ? (
                                    <>
                                        <div className="Pagesmobile-contactformsmallinputdiv">
                                            <FormField fieldName="CityTown" fieldType="text" fieldDisplayName="City/Town" required={includeAddress} small={true}/>
                                            <br/>
                                            <FormField fieldName="StateCounty" fieldType="text" fieldDisplayName="State/County" required={includeAddress} small={true}/>
                                        </div>
                                        <br/>
                                        <div className="Pagesmobile-contactformsmallinputdiv">
                                            <FormField fieldName="Postcode" fieldType="text" fieldDisplayName="Postcode" required={includeAddress} small={true}/>
                                            <br/>
                                            <FormField fieldName="Country" fieldType="text" fieldDisplayName="Country" required={includeAddress} small={true}/>
                                        </div>
                                    </>
                                ) : (
                                    <div className="Pages-contactforminputdiv">
                                        <div>
                                            <p>City/Town</p>
                                            <Field type="text" name="CityTown" className="Pages-forminputquarter"/>
                                            <ErrorMessage name="CityTown" component="div" />
                                        </div>

                                        <div>
                                            <p>State/County</p>
                                            <Field type="text" name="StateCounty" className="Pages-forminputquarter"/>
                                            <ErrorMessage name="StateCounty" component="div" />
                                        </div>

                                        <div>
                                            <p>Postcode</p>
                                            <Field type="text" name="Postcode" className="Pages-forminputquarter"/>
                                            <ErrorMessage name="Postcode" component="div" />
                                        </div>

                                        <div>
                                            <p>Country</p>
                                            <Field type="text" name="Country" className="Pages-forminputquarter"/>
                                            <ErrorMessage name="Country" component="div" />
                                        </div>
                                    </div>
                                )}
                                <br/>
                                </>
                            )}

                            <div className="Pages-contactsubmitdiv" disabled={isSubmitting}>
                                <img src="Icon_Submit.svg" alt="Submit" className={mobile?"Pagesmobile-contactsubmitimage":"Pages-contactsubmitimage"}/>
                                <Field type="submit" name="submit" className={mobile?"Pagesmobile-submitbutton":"Pages-submitbutton"} />
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
}

export default ContactForm;