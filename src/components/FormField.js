import React from 'react';
import { Field, ErrorMessage } from 'formik';

import "../pages/pages.css"

function FormField(props) {
    const fieldName = props.fieldName;
    const fieldType = props.fieldType;
    const fieldDisplayName = props.fieldDisplayName;
    const required = props.required;
    const small = props.small;

    return(
        <div>
            <p>{fieldDisplayName}{!required ? <span className="Pages-graytext"><i> - optional</i></span> : ""}</p>
            <Field type={fieldType} name={fieldName} className={small ? "Pages-formsmallinput" : "Pages-forminput"}/>
            <ErrorMessage name={fieldName} component="div" />
        </div>
    );
}

export default FormField;