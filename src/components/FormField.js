import React from 'react';
import { Field, ErrorMessage } from 'formik';

import ScreenSize from "./ScreenSize";

import "../pages/pages.css";
import "../pages/pages-mobile.css";


function FormField(props) {
    const mobile = ScreenSize() === 's';

    const fieldName = props.fieldName;
    const fieldType = props.fieldType;
    const fieldDisplayName = props.fieldDisplayName;
    const required = props.required;
    const small = props.small;

    return(
        <div>
            <p className={mobile?"Pagesmobile-text":""}>{fieldDisplayName}{!required ? <span className="Pages-graytext"><i> - optional</i></span> : ""}</p>
            <Field type={fieldType} name={fieldName} className={mobile ? (small ? "Pagesmobile-formsmallinput" : "Pagesmobile-forminput") : (small ? "Pages-formsmallinput" : "Pages-forminput")}/>
            <ErrorMessage name={fieldName} component="div" />
        </div>
    );
}

export default FormField;