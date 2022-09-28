import React from 'react'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import CommonForm from '../components/CommonForm/CommonForm'
import { graphql } from 'gatsby'
import BigButton from '../components/button/BigButton'


let link =[
  "https://www.google.com/maps/place/Verinite+Technologies+Pvt+Ltd/@18.565311,73.77415,15z/data=!4m5!3m4!1s0x0:0x3c6271259186a7dd!8m2!3d18.565311!4d73.77415",
  "https://www.google.com/maps/place/51%C2%B000'25.8%22N+0%C2%B007'02.2%22W/@51.0071702,-0.1194682,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d51.0071668!4d-0.1172795",
  "https://www.google.com/maps/place/12%C2%B057'29.3%22N+80%C2%B014'40.3%22E/@12.9579898,80.2447769,20z/data=!4m5!3m4!1s0x0:0x0!8m2!3d12.9581408!4d80.2445275",
  "https://www.google.com/maps/place/39%C2%B044'53.8%22N+75%C2%B032'51.8%22W/@39.7482741,-75.5499106,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d39.74827!4d-75.5477219"

];


const LocationCard = ({ title, address, image, phone ,link }) => {
  return (
    <div className="col-md-6 mt_30" data-aos="fade-up" data-aos-delay="400">
      <div className="blog_box">
        {/* <a href="!#" className="blog_img overflow-hidden"> */}
          <img src={image} alt="..." />
        {/* </a> */}
        <div className="blog_content">
          {/* <a href="!#"> */}
            <h6>{title}</h6>
          {/* </a> */}
          <p className="mt_10 description">{address}</p>
          <p className="mt_10">
            Tel : <a href={`tel:${phone}`}>{phone}</a>
          </p>
          
                <BigButton
                  btnClass="black_btn mt_20"
                  btnText="view on maps"
                  target
                  link={link}
                />
          
        </div>
      </div>
    </div>
  )
}

export const PageTemplate = ({ acf, title }) => {
  return (
    <main>
      <CommonBanner
        badge
        title={title}
        image={acf.header.header_image.localFile.childImageSharp.fluid.src}
        subHeading={acf.header.sub_title}
        description={acf.header.description}
      />
      
      
      <CommonForm formTitle="Enquiry form" submitTitle="submit" />
      <div className="location_area section_padd">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Get in touch</h2>
            </div>
            {acf.locations.map((location, i) => {
              return (
                <LocationCard
                  key={i}
                  image={
                    location.location_image.localFile.childImageSharp.fluid.src
                  }
                  title={location.location_name}
                  address={location.location_address}
                  phone={location.telephone_number}
                  link={link[i]}
                />
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Contact = ({ data }) => {
  const { wordpressPage: page } = data
  return (
    <Layout>
      <Helmet title={`Verinite | ${page.title}`} />
      <PageTemplate acf={page.acf} title={page.title} />
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query ContactPageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      acf {
        header {
          sub_title
          description
          header_image {
            localFile {
              childImageSharp {
                fluid(quality: 90) {
                  src
                }
              }
            }
          }
        }
        locations {
          location_name
          location_address
          telephone_number
          location_image {
            localFile {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
