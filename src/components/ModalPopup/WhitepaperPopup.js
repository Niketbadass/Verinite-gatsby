import React, { useEffect, useCallback, useState } from 'react'
import icon from '../../assets/img/paper-plane.svg'
import cancel from '../../assets/img/cancel.svg'
import axios from 'axios'
import { Map } from 'react-lodash'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import Thankyou from '../ModalPopup/thankyoupopup'

import countrycodes from "../allnumber"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
let intcode = "+91"

const CustomField = ({
    id,
    type,
    options,
    value,
    isRequired,
    label,
    touched,
    errors,
    onChange,
}) => {
    let field = ''
    let labelContent = ''
    if (label) {
        labelContent = (
            <label htmlFor={id} className="label_text">
                {' '}
                {label} {isRequired ? <span className="required">*</span> : ''}
            </label>
        )
    }
    let errorContent = ''
    if (touched && errors) {
        errorContent = (
            <span style={{ marginTop: '5px', color: 'red', fontSize: '12px' }}>
                {errors}
            </span>
        )
    }
    switch (type) {
        case 'mobile':
            field = (
                <div className="position-relative">
                    <Field as="select" id={id} name={id} className="input_box select_box" onChange={onChange}>
                        <Map
                            collection={options}
                            iteratee={(item, index) => (
                                <option
                                    value={item.value}
                                    id={item.id}
                                    selected={index === 0 ? true : ''}
                                >
                                    {item.label}


                                </option>
                            )}
                        />
                    </Field>
                    <span id="countryCode">{intcode}</span>
                </div>

            )
            break
        case 'select':
            field = (
                <Field as="select" id={id} name={id} className="input_box select_box">
                    <Map
                        collection={options}
                        iteratee={(item, index) => (

                            <option
                                value={item.value}
                                id={item.id}
                                selected={index === 0 ? true : ''}
                            >
                                {item.label}
                            </option>
                        )}
                    />
                </Field>
            )
            break
        case 'textarea':
            field = <Field name={id} id={id} as="textarea" className="input_box" />
            break
        default:
            field = (
                <Field
                    name={id}
                    type={type}
                    id={id}
                    value={value}
                    className="input_box"
                />
            )
            break
    }
    return (
        <>
            {labelContent}
            {field}
            {errorContent}
        </>
    )
}

const MainForm = props => {
    const WEBSITE_URL = 'https://admin.verinite.com'
    const FORM_ID = '4885' //Form id that provides Contact Form 7
    const [token, setToken] = useState('') // store token
    const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
    const [messageSent, setMessageSent] = useState(false) // manage sent message state
    const [messag, setMessag] = useState(10);
    const { tokenprop, link, subject, sucess } = props
    return (
        <div>

            <Formik
                initialValues={{
                    names: '',
                    email: '',
                    company: '',
                    code: '+91',
                    mobile_number: '',
                    job: '',
                    // enquiry: '',
                    // message: '',
                }}
                validationSchema={Yup.object({
                    names: Yup.string()
                        .max(80, 'Please enter your name 80 characters or less')
                        .required('Please enter your name')
                        .matches(nameRegExp, 'Please enter your valid name'),

                    company: Yup.string()
                        .max(50, ' Please enter your conpamy name 50 characters or less')
                        .required('Please enter your company name')
                        .matches(nameRegExp, 'Please enter your valid company name'),

                    email: Yup.string()
                        .max(40, 'Please enter your email 40 characters or less')
                        .email('Please enter your valid email')
                        .required('Please enter your email'),
                    mobile_number: Yup.string()
                        //   .max(messag, 'Please enter your valid phone number')
                        .matches(phoneRegExp, 'Please enter your valid phone number')
                        .required('Please enter your phone number'),
                    job: Yup.string()
                        .ensure()
                        .matches(nameRegExp, 'Please enter your valid job')
                        .required('Please enter your job'),
                    // enquiry: Yup.string()
                    //     .ensure()
                    //     .required('Please select any option'),
                    // message: Yup.string()
                    //     .ensure()
                    //     .max(500, 'Please restrict your message to 500 letters')

                    //     .required('Please enter your message'),
                })}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(true)
                    // here we created a FormData field for each form field
                    const bodyFormData = new FormData()
                    bodyFormData.set('names', values.names)
                    bodyFormData.set('email', values.email)
                    bodyFormData.set('message', link)
                    // bodyFormData.set('enquiry', values.enquiry)
                    bodyFormData.set('job', values.job)
                    bodyFormData.set('mobile_number', values.code + " " + values.mobile_number)
                    bodyFormData.set('company', values.company)

                    // here we sent
                    axios({
                        method: 'post',
                        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
                        data: bodyFormData,
                        headers: {
                            Authorization: `Bearer ${tokenprop}`,
                            'Content-Type': 'multipart/form-data',
                        },
                    })
                        .then(response => {
                            if (response.status == 200) {
                                // alert("Your form has been submitted successfully")
                                // actions taken when submission goes OK
                                actions.resetForm()
                                sucess()
                                // setDisplay3(true)
                                actions.setSubmitting(false)
                                setMessageSent(true)
                                setIsSuccessMessage(true)
                            }
                        })
                        .catch(error => {
                            // actions taken when submission goes wrong
                            actions.setSubmitting(false)
                            setMessageSent(true)
                            setIsSuccessMessage(false)
                        })
                }}
            >
                {({
                    values, errors, touched, setFieldValue

                }) => (
                    <Form className="position-relative p-5">
                        <h2 className="text-center title">Download Whitepaper</h2>
                        <p className="mt_10 text-center">Please provide below details to get our white papaer for free</p>
                        <div className="row justify-content-center mt-5">
                            <div className="col-md-6 mt_15">
                                <CustomField
                                    type="text"
                                    isRequired
                                    id="names"
                                    label="Full Name"
                                    touched={touched.names}
                                    errors={errors.names}
                                />
                            </div>

                            <div className="col-md-6 mt_15">
                                <CustomField
                                    type="email"
                                    isRequired
                                    id="email"
                                    label="Email"
                                    touched={touched.email}
                                    errors={errors.email}
                                />
                            </div>
                            <div className="col-md-6 ">
                                <div className="d-sm-flex">
                                    <div className="mr_15 mt_15 select_wrapper">
                                        <CustomField
                                            type="mobile"
                                            options={countrycodes.allCountryCodes}
                                            // options={[
                                            //   { id: 'India', value: '+91', label: 'India' },
                                            //   { id: 'Canada', value: '+1', label: 'Canada' },
                                            // ]}
                                            isRequired
                                            label="Code"
                                            id="code"
                                            touched={touched.code}
                                            errors={errors.code}
                                            onChange={(e) => {
                                                e.target.value == "+91" ? (setMessag(10)) : (setMessag(11))
                                                setFieldValue('code', e.target.value)
                                                intcode = e.target.value
                                            }}
                                        />
                                    </div>

                                    <div className="w-100 mt_15">
                                        <CustomField
                                            type="text"
                                            isRequired
                                            id="mobile_number"
                                            label="Phone Number"
                                            touched={touched.mobile_number}
                                            // errors={errors.mobile_number}
                                        />

                                    </div>

                                </div>
                                {errors.mobile_number&&touched.mobile_number&&
                                    <span style={{ marginTop: '5px', color: 'red', fontSize: '12px' }}>
                                    {errors.mobile_number}
                                </span>
                                }
                            </div>
                            <div className="col-md-6 mt_15">
                                <CustomField
                                    type="text"
                                    isRequired
                                    id="company"
                                    label="Company"
                                    touched={touched.company}
                                    errors={errors.company}
                                />
                            </div>
                            <div className="col-md-12 mt_15">
                                <CustomField
                                    type="text"
                                    id="job"
                                    isRequired
                                    label="Job title / Designation"
                                    touched={touched.job}
                                    errors={errors.job}
                                />
                            </div>
                           
                            <div className="col-xl-4 mt_50">
                                <button type="submit" className="button black_btn w-100">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
const Modal = props => {
    const { dis, opn, close, link, subject, sucess } = props
    const WEBSITE_URL = 'https://admin.verinite.com'
    const [token, setToken] = useState('') // store token
    const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
    const [messageSent, setMessageSent] = useState(false) // manage sent message state
    // sucess
    const [display3, setDisplay3] = React.useState(false)

    const open3 = () => {
        setDisplay3(true);

    }


    const close3 = () => {
        setDisplay3(false)

    }


    useEffect(() => {
        axios({
            method: 'post',
            url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
            data: {
                username: 'rishabh90', // provide a user credential with subscriber role
                password: 'admin123',
            },
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                setToken(response.data.token);

            })
            .catch(error => console.error('Error', error))
    }, [])


    return (
        <div>
            <div className="modalWarpper">
                <div className="modalBackdrop" onClick={close}></div>
                <div className="modalBox3 whitepaperPopup">
                    <div className="popup-cancel">
                        <img src={cancel} className="popup_btn-cancel" onClick={close} />
                    </div>
                    {display3 ?
                        <Thankyou
                            head="Thank You!"
                            text="Thank you for showing interest. This relevant resource will be sent to your inbox shortly."
                            close={close3}
                            popupclose={close}
                        /> : ''
                    }

                    <MainForm tokenprop={token} subject={subject} sucess={open3} link={link} />

                </div>
            </div>
        </div>
    )
}
export default Modal
