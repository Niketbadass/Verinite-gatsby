import { Field, Form, Formik, useFormikContext } from 'formik'
import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Map } from 'react-lodash'
import axios from 'axios'
import countryCode from "./allnumber";
import Thankyou from '../components/ModalPopup/thankyoupopup'

import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

let intcode ="+91"


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nameRegExp = /^[a-zA-Z]+(?:[\s. ]+[a-zA-Z]+)*$/;
const CustomField = ({
  id,
  type,
  options,
  value,
  isRequired,
  insideLabel,
  label,
  name,
  checked,
  touched,
  errors,
  onChange,
  state,
}) => {
  const { setFieldValue } = useFormikContext()
  let field = ''
  let labelContent = ''
  if (label) {
    labelContent = (
      <label htmlFor={id} className="label_text">
        {label}
        {isRequired ? <span className="required">*</span> : ''}
      </label>
    )
  }
  let errorContent = ''
  if (touched && errors) {
    errorContent = (
      <span
        style={{ marginTop: '5px', color: 'red', fontSize: '12px' }}
        className="errorItem"
      >
        {errors}
      </span>
    )
  }
  switch (type) {
    case 'select':
      field = (
        <Field as="select" id={id} name={id} className="input_box" onChange={onChange}>
          <Map
            collection={options}
            iteratee={(item, index) => (
              <option
              type="checkbox"
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
      case 'mobile':
      field = (
        <div className="position-relative">
          <Field as="select" id={id} name={id} className="input_box" onChange={onChange}>
          <Map
            collection={options}
            iteratee={(item, index) => (
              <option
              type="checkbox"
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
    case 'radio':
      field = (
        <div class="col-md-6">
          <label htmlFor={id} className="input_box">
            <Field
              name={name}
              id={id}
              type={type}
              checked={checked}
              value={value}
            />
            <span>{insideLabel}</span>
          </label>
        </div>
      )
      break
    case 'file':
      field = (
        <label htmlFor={id} className="input_box">
          <Field id={id} name={id} type={type} value={value} className="upload_hide_fld" onChange={onChange} />
          {insideLabel}
        </label>
      )
      break
      case 'multi':
        field = (
        
        <Select
          value={id}
          id='ant_custom'
          name="niket"
          className="input_box ant_custom"
          // className={this.props.cssClass}
          // disabled={this.props.disabled}
          // onChange={this.props.onChange}
          onChange={(val) => {
            setFieldValue('location', val);
          }}
          mode="multiple"
          showSearch
          style={{ backgroundColor: '#f3f6f8' }}
          // filterOption={(input, option) => option.props.children.toLowerCase()
          //   .indexOf(input.toLowerCase()) >= 0}
          size="large"
        >
          
              <Option  value="pune" style={{ backgroundColor: '#f3f6f8' }} >Pune</Option>
              <Option value="bangalore" style={{ backgroundColor: '#f3f6f8' }}>Bangalore</Option>
              <Option value="mumbai" style={{ backgroundColor: '#f3f6f8' }}>Mumbai</Option>
              <Option value="chennai" style={{ backgroundColor: '#f3f6f8' }}>Chennai</Option>
   
             
           
        </Select>
        )
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

const JobForm = (props) => {
  // console.log("props.position", props.position)
  const SUPPORTED_FORMATS = [
    "application/pdf",
    "application/doc",
    "application/docx",
    "application/PDF",
    "application/DOC",
    "application/DOCX",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

    ""
  ];
  const WEBSITE_URL = 'https://admin.verinite.com'
  const FORM_ID = '2263' //Form id that provides Contact Form 7
  const [token, setToken] = useState('') // store token
  const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
  const [messageSent, setMessageSent] = useState(false) // manage sent message state
  const [messag, setMessag] = useState(10)
  const [valid, setValid]= useState()
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
        setToken(response.data.token)
      })
      .catch(error => console.error('Error', error))
  }, [])
  
  return (
    <div>
       {display3 ?
          <Thankyou
            head="Thank You!"
            text="We appreciate your interest. Our team will get back to you shortly."
            close={close3}
            Customclass="modalBox2"
            // popupclose={close}
          /> : ''
          }
    <Formik
      initialValues={{
        name: '',
        date: '',
        email: '',
        code: '+91',
        mobile_number: '',
        exp: '',
        rexp: '',
        exctc: '',
        ctc: '',
        cur: '',
        notice: '',
        location: '',
        file: '',
        // filename: '',

      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(80, 'Please enter your name within 80 characters or less')
          .required('Please enter your name')
          .matches(nameRegExp,'Please enter your valid name'),
        date: Yup.string()
          .ensure()
          .required('Please enter your date of birth'),
        email: Yup.string()
          .max(40, 'Please enter your email within 40 characters or less')
          .email('Please enter your valid email')
          .required('Please enter your email'),
        mobile_number: Yup.string()
          .max(messag, 'Mobile number should be ' +messag+ ' digit')
          .matches(phoneRegExp, 'Please enter your valid mobile number')
          .required('Please enter your mobile number'),
        exctc: Yup.string()
          .required("Please enter expected ctc")
          .matches(/^\d{0,2}(\.\d{1,2})?$/, 'Please enter valid expected ctc'),
        cur: Yup.string()
          .ensure()
          .matches(nameRegExp,'Please enter your valid current work')
          .required('Please enter your current work'),
        exp: Yup.string()
          .required("Please enter your experience")
          .matches(/^\d{0,2}(\.\d{1,2})?$/, 'Please enter vaild experience'),
        rexp: Yup.string()
          .required("Relevant experience is required")
          .matches(/^\d{0,2}(\.\d{1,2})?$/, 'Please enter vaild relevent experience'),
        ctc: Yup.string()
          .required("Please enter your current ctc")
          .matches(/^\d{0,2}(\.\d{1,2})?$/, 'Please enter your valid current ctc'),
        notice: Yup.string()
          .ensure()
          .matches(/^(0?[0-9]{1,2}|1[0-7][0-9]|180)$/, 'Maximum notice period should be 180 days')
          .required('Please enter notice period in days (180 days max.)'),
        location: Yup.array().min(1,'Please select location preffered')
          .max(2,'Please select 2 location preffered only')
          .required(' Please select location preffered'),
        file:Yup.mixed()
          .required("Please upload resume")
          .test(
            "fileFormat",
            "Please upload valid resume",
            value => value && SUPPORTED_FORMATS.includes(value.type)
          )
        
      })}
      onSubmit={(values, actions) => {
        
        actions.setSubmitting(true)
        // here we created a FormData field for each form field
        const bodyFormData = new FormData()
        bodyFormData.set('full_name', values.name)
        bodyFormData.set('mobile_number', values.code +" " +values.mobile_number)
        bodyFormData.set('dob', values.date)
        bodyFormData.set('currently_working', values.cur)
        bodyFormData.set('total_experience', values.exp)
        bodyFormData.set('rel_experience', values.rexp)
        bodyFormData.set('current_ctc', values.ctc)
        bodyFormData.set('notice', values.notice)
        bodyFormData.set('expected_ctc', values.exctc)
        bodyFormData.set('location', values.location)
        bodyFormData.set('email', values.email)
        bodyFormData.set('resume', values.file)
        bodyFormData.set('Position', props.position)
        // here we sent
        // console.log("file",values.file)
        axios({
          method: 'post',
          url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
          data: bodyFormData,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
          // .then(response => {
          //   // actions taken when submission goes OK
          //   actions.resetForm()
          //   actions.setSubmitting(false)
          //   setMessageSent(true)
          //   setIsSuccessMessage(true)
          // })
          .then(response => {
            console.log(response)
            if(response.status==200){
            // alert("Your form has been submitted successfully")
            // actions taken when submission goes OK
            actions.resetForm()
            open3()
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
          <h5 className="text-center">Personal Details</h5>
          <div className="note">
            <em>
              <span className="required">*</span> Required
            </em>
          </div>
          <div className="form_box">
            <div className="row justify-content-center">
              <div className="col-md-6 mt_15">
                <CustomField
                  isRequired
                  id="name"
                  label="Full Name"
                  type="text"
                  touched={touched.name}
                  errors={errors.name}
                />
              </div>
              <div className="col-md-6 mt_15">
                <CustomField
                  isRequired
                  id="date"
                  type="date"
                  label="Date of birth ( DD/MM/YYYY)"
                  touched={touched.date}
                  errors={errors.date}
                />
              </div>

              <div className="col-md-6 mt_15">
                <CustomField
                  isRequired
                  id="email"
                  label="Email"
                  type="email"
                  touched={touched.email}
                  errors={errors.email}
                />
              </div>
              <div className="col-md-6 mt_15">
                <div className="d-flex">
                  <div className="mr_15">
                    <CustomField
                      type="mobile"
                      options={countryCode.allCountryCodes}
                      isRequired
                      label="Code"
                      id="code"
                      touched={touched.code}
                      errors={errors.code}
                      onChange={ (e)=>{
                        e.target.value=="+91"?(setMessag(10)):(setMessag(11))
                        setFieldValue('code',e.target.value)
                        intcode=e.target.value;
                      }}
                    />
                  </div>
                  <div className="w-100">
                    <CustomField
                      type="text"
                      isRequired
                      id="mobile_number"
                      label="Mobile Number"
                      touched={touched.mobile_number}
                      errors={errors.mobile_number}
                      
                    />
                  </div>
                  {/* <span id="countryCode">{values.code}</span> */}
                </div>
              </div>
            </div>
          </div>

          <h5 className="text-center mt_50">Professional Details</h5>
          <div className="form_box">
            <div className="row justify-content-center">
              <div className="col-md-6 mt_15">
                <CustomField
                  isRequired
                  type="text"
                  id="cur"
                  label="Currently working in as"
                  touched={touched.cur}
                  errors={errors.cur}
                />
              </div>
              <div className="col-md-6 mt_15">
                <CustomField
                  isRequired
                  type="text"
                  id="exp"
                  label="Total years of experience"
                  touched={touched.exp}
                  errors={errors.exp}
                />
              </div>
              <div className="col-md-6 mt_15">
                <CustomField
                  isRequired
                  id="rexp"
                  type="text"
                  label="Relevant experience"
                  touched={touched.rexp}
                  errors={errors.rexp}
                />
              </div>
              <div className="col-md-6 mt_15">
                <CustomField
                  isRequired
                  id="ctc"
                  type="text"
                  label="Current Ctc ( IN LPA )"
                  touched={touched.ctc}
                  errors={errors.ctc}
                />
              </div>
              <div className="col-md-6 mt_15">
                <CustomField
                  isRequired
                  id="exctc"
                  type="text"
                  label="expected ctc ( IN LPA )"
                  touched={touched.exctc}
                  errors={errors.exctc}
                />
              </div>
              <div className="col-md-6 mt_15">
                <CustomField
                  notice
                  isRequired
                  id="notice"
                  type="text"
                  label="notice period ( In Days )"
                  
                  touched={touched.notice}
                  errors={errors.notice}
                />
              </div>
              <div className="col-md-6 mt_15" id="ant_customdes">
                <span class="label_text">
                  Location preffered
                  <span class="required">*</span>
                </span>
                <div className="row v2" id="multi-drop-jobs-page">
                  <CustomField
                    type="multi"
                   
                    touched={touched.location}
                    errors={errors.location}
                    
                  />
                  
                  
                </div>
              </div>
              <div className="col-md-6 mt_15">
                <span className="label_text">
                  Resume
                  <span className="required">*</span>
                </span>
               
                <CustomField
                  id="file"
                  type="file"
                  insideLabel={values.file?(
                    <span class=""><i class="fas fa-file-alt uploadicon"></i> {values.file.name} </span> 
                  ): <span class="upd_text">Upload</span>}
                  touched={touched.file}
                  errors={errors.file}
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                    // values.file.name?values.name.file.split(/^.*[\\\/]/)[1]:
                  }}
                />
              </div>
              <div className="col-xl-9 mt_50">
                <button type="submit" className="button black_btn w-100">
                  submit application
                </button>
              </div>
            </div>
          </div>
           {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          {/*<pre>{JSON.stringify(values.file?JSON.stringify(values.file):(""), null, 2)}</pre> */}

        </Form>
      )}
    </Formik>
    </div>
  )
}

export default JobForm
