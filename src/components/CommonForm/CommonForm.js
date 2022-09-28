import React, { useEffect, useState } from 'react'
import { Map } from 'react-lodash'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Thankyou from '../ModalPopup/thankyoupopup'

import countrycodes from "../allnumber"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
let intcode ="+91"
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

const CommonForm = props => {
  const WEBSITE_URL = 'https://admin.verinite.com'
  const FORM_ID = '1503' //Form id that provides Contact Form 7
  const [token, setToken] = useState('') // store token
  const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
  const [messageSent, setMessageSent] = useState(false) // manage sent message state
  const [messag, setMessag] = useState(10)
  const [display3, setDisplay3] = React.useState(false)
  const open3 = () => {
    setDisplay3(true);

  }


  const close3 = () => {
    setDisplay3(false)
    window.location.reload();

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
        // console.log(response)
        setToken(response.data.token)
      })
      .catch(error => console.error('Error', error))
  }, [])
  return (
    <div className="personal_details_wrapper section_padd v2">
      {display3 ?
          <Thankyou
            head="Thank You!"
            text="we appreciate your interest. Our team will get back to you shortly."
            close={close3}
            Customclass="modalBox2"
            // popupclose={close}
          /> : ''
          }
      <div className="container">
        <Formik
          initialValues={{
            names: '',
            email: '',
            company: '',
            code: '+91',
            mobile_number: '',
            job: '',
            enquiry: '',
            message: '',
          }}
          validationSchema={Yup.object({
            names: Yup.string()
              .max(80, 'Please enter your name 80 characters or less')
              .required('Please enter your name')
              .matches(nameRegExp,'Please enter your valid name'),

            company: Yup.string()
              .max(50, ' Please enter your conpamy name 50 characters or less')
              .required('Please enter your company name')
              .matches(nameRegExp,'Please enter your valid company name'),
          
            email: Yup.string()
              .max(40, 'Please enter your email 40 characters or less')
              .email('Please enter your valid email')
              .required('Please enter your email'),
            mobile_number: Yup.string()
              .max(messag, 'Please enter your valid phone number')
              .matches(phoneRegExp, 'Please enter your valid phone number')
              .required('Please enter your phone number'),
            job: Yup.string()
              .ensure()
              .matches(nameRegExp,'Please enter your valid job')
              .required('Please enter your job'),
            enquiry: Yup.string()
              .ensure()
              .required('Please select any option'),
            message: Yup.string()
              .ensure()
              .max(500, 'Please restrict your message to 500 letters')

              .required('Please enter your message'),
          })}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true)
            // here we created a FormData field for each form field
            const bodyFormData = new FormData()
            bodyFormData.set('names', values.names)
            bodyFormData.set('email', values.email)
            bodyFormData.set('message', values.message)
            bodyFormData.set('enquiry', values.enquiry)
            bodyFormData.set('job', values.job)
            bodyFormData.set('mobile_number', values.code +" " +values.mobile_number)
            bodyFormData.set('company', values.company)

            // here we sent
            axios({
              method: 'post',
              url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
              data: bodyFormData,
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
            })
              .then(response => {
                // console.log(response)
                if(response.status==200){
                // alert("Your form has been submitted successfully")
                // actions taken when submission goes OK
                actions.resetForm()
                open3()
                // setDisplay3(true)
                actions.setSubmitting(false)
                setMessageSent(true)
                setIsSuccessMessage(true)
              }})
              .catch(error => {
                console.log(error)
                // actions taken when submission goes wrong
                actions.setSubmitting(false)
                setMessageSent(true)
                setIsSuccessMessage(false)
              })
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form className="position-relative">
              <h2 className="text-center title">{props.formTitle}</h2>
              <div className="note">
                <em>
                  <span className="required">*</span> Required
                </em>
              </div>
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
                    type="text"
                    isRequired
                    id="company"
                    label="Company"
                    touched={touched.company}
                    errors={errors.company}
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
                <div className="col-md-6 mt_15">
                  <div className="d-flex">
                    <div className="mr_15 select_wrapper">
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
                        onChange={ (e)=>{
                          e.target.value=="+91"?(setMessag(10)):(setMessag(11))
                          setFieldValue('code',e.target.value)
                          intcode=e.target.value
                        }}
                      />
                    </div>
                    <div className="w-100">
                      <CustomField
                        type="text"
                        isRequired
                        id="mobile_number"
                        label="Phone Number"
                        touched={touched.mobile_number}
                        errors={errors.mobile_number}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt_15">
                  <CustomField
                    type="text"
                    id="job"
                    isRequired
                    label="Job title / Designation"
                    touched={touched.job}
                    errors={errors.job}
                  />
                </div>
                <div className="col-md-6 mt_15">
                  <CustomField
                    type="select"
                    options={[
                      { id: 'selectoption', value: '', label: 'Select Option' },
                      { id: 'item1', 
                      value: 'I am looking for more information on Verinite’s service offerings', 
                      label: 'I am looking for more information on Verinite’s service offerings' 
                      },
                      { id: 'item2', 
                      value: 'I am looking to forge partnership with Verinite', 
                      label: 'I am looking to forge partnership with Verinite' 
                      },
                      { id: 'item3', 
                      value: 'I am looking for job / work opportunities at Verinite', 
                      label: 'I am looking for job / work opportunities at Verinite' 
                      },
                      { id: 'item4', 
                      value: 'I am a service provider looking to offer services to Verinite', 
                      label: 'I am a service provider looking to offer services to Verinite' 
                      },
                      { id: 'item5', 
                      value: 'Other', 
                      label: 'Other' 
                      },
                    ]}
                    isRequired
                    label="Type of enquiry"
                    id="enquiry"
                    touched={touched.enquiry}
                    errors={errors.enquiry}
                  />
                </div>
                <div className="col-md-12 mt_15">
                  <CustomField
                    type="textarea"
                    id="message"
                    name="message"
                    isRequired
                    label="Message (Maximum 500 letters)"
                    col={53}
                    row={10}
                    touched={touched.message}
                    errors={errors.message}
                  />
                </div>
                <div className="col-xl-9 mt_50">
                  <button type="submit" className="button black_btn w-100">
                    {props.submitTitle}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CommonForm
