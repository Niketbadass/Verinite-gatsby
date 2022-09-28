import React, { useEffect,useCallback, useState } from 'react'
import icon from '../../assets/img/paper-plane.svg'
import cancel from '../../assets/img/cancel.svg'
import axios from 'axios'
import { Formik } from 'formik'
import Thankyou from '../ModalPopup/thankyoupopup'
const MainForm = props => {
  const { tokenprop, link, subject, sucess } = props
  
  return (
    <div>
      
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, actions) => {
          const FORM_ID = '3035' //Form id that provides Contact Form 7

          actions.setSubmitting(true)
          // here we created a FormData field for each form field
          const bodyFormData = new FormData()

          bodyFormData.set('email', values.email)
          bodyFormData.set('message', link)
          bodyFormData.set('subject', subject)


          // here we sent
          axios({
            method: 'post',
            url: `https://admin.verinite.com/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
            data: bodyFormData,
            headers: {
              Authorization: `Bearer ${tokenprop}`,
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(response => {

              if(response.status==200){
                sucess()

              }

             
              
              console.log(response.status)
            })
            .catch(error => {
              // actions taken when submission goes wrong
              console.log(error)
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>
            <form onSubmit={handleSubmit} className="d-flex w-100">
              <div class="form-group w-100">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  class="pl-4 width100"
                  placeholder="email@example.com"
                />
              </div>

              <div class="input-bar-item">
                <button type="submit" class="">
                  <img src={icon} />
                </button>
              </div>
            </form>
            {errors.email && touched.email && errors.email}
          </>
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

  const open3 = () =>{
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
        <div className="modalBox">
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
          <div className="row height-100">
            <div className="col-lg-5 ">
              <div className="img-row">
              </div>
            </div>
            <div className="col-lg-7 display-flex ">
              <div className="pl-sm-5 pl-3 pr-sm-5 pr-3 m-auto">
                <h2 className="mb-4">Download</h2>
                <p className="mb-4">
                  Please enter your email address to recieve the complete resource in you mail box.
                </p>
                {/* <p className="mb-5">
                Our newsletter is sent once a week, every Monday.
              </p> */}
                <div class="input-bar">
                  <div class="input-bar-item width100">
                    <MainForm tokenprop={token} subject={subject} sucess={open3} link={link} />

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
