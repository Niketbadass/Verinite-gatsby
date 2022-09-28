import React, { useEffect, useState } from 'react'
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
        onSubmit={(values, { setSubmitting }) => {
          const bodyFormData = new FormData()
          bodyFormData.set('email', values.email)
          // bodyFormData.set('status', 'not_confirmed')
          let api =
            'https://admin.verinite.com/wp-json/newsletter/v2/subscriptions'
          let clientKey = '99d681db9e5d5c1f89d99f4131cfb4c9afba585e'
          let secretKey = 'ca437604222950a6f6660454901c546647c2d829'
          axios({
            method: 'post',
            url: `${api}?client_key=${clientKey}&client_secret=${secretKey}`,
            data: bodyFormData,
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => {
              console.log(response)
              if (response.status == '201') {
                setSubmitting(false)
                if (window !== "undefined") {
                  localStorage.setItem("suscribe", "true")
                }
                sucess()
                // alert('Great! You have been sucessfully suscribed to Verinite resources.')
              }
              // else if(response.status=="500"||response.status=="400"){
              //     alert("Email address already exists")
              // }

              // alert(response)
            })
            .catch(error => console.error('Error', error))
          //   setTimeout(() => {
          //     alert(JSON.stringify(values.email, null, 2));
          //     setSubmitting(false);
          //   }, 400);
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
  const { dis, opn, close, click } = props

  const [display3, setDisplay3] = React.useState(false)

  const open3 = () => {
    setDisplay3(true);

  }


  const close3 = () => {
    setDisplay3(false)

  }
  return (
    <div className="modalWarpper">
      <div className="modalBackdrop" onClick={close}></div>
      <div className="modalBox">
        <div className="popup-cancel">
          <img src={cancel} className="popup_btn-cancel" onClick={close} />
        </div>
        {display3 ?
          <Thankyou
            head="Thank You!"
            text="Great! You have been successfully subscribed to Verinite resources."
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
              <h2 className="mb-4">Subscribe here</h2>
              <p className="mb-4">
                Subscribe to our resources and never miss our blogs, case
                studies, latest news, etc.
              </p>
              {/* <p className="mb-5">
                Our newsletter is sent once a week, every Monday.
              </p> */}
              <div class="input-bar">
                <div class="input-bar-item width100">
                  <MainForm sucess={open3}/>
                  {/* <form>
                            <div class="form-group">
                                <input class="pl-4 width100" placeholder="email@example.com" />
                            </div>
                        </form> */}
                </div>
                {/* <div class="input-bar-item">
                        <button class="">
                        <img
                        src={icon}
                        />
                        </button>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
