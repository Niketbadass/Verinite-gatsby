import React from 'react'
import desk from '../../assets/img/life/desk.png'
import centerlogo from '../../assets/img/life/opportunity.png'

const Expect = data => {
  return (
    <div className="life-box">
      <div className="row ">
        <div className="col-lg-4 ">
          <div className="life-box-left ">
            <div className="content">
              <h6>{data.data[0].head}</h6>
              <p>{data.data[0].text}</p>
            </div>
            <div className="life-box-image float-right">
              <img src={data.data[0].image.source_url} />
            </div>
          </div>
          <div className="life-box-left content-middle ">
            <div className="content">
              <h6>{data.data[2].head}</h6>
              <p>{data.data[2].text}</p>
            </div>
            <div className="life-box-image float-right">
              <img src={data.data[2].image.source_url} />
            </div>
          </div>
          <div className="life-box-left">
            <div className="content">
              <h6>{data.data[4].head}</h6>
              <p>{data.data[4].text}</p>
            </div>
            <div className="life-box-image float-right">
              <img src={data.data[4].image.source_url} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-5 mt-5 display-mobile-none">
          <div className="life-box-mid">
            <img src={centerlogo} className="" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="life-box-left">
            <div className="life-box-image">
              <img src={data.data[1].image.source_url} />
            </div>
            <div className="content-right">
              <h6>{data.data[1].head}</h6>
              <p>{data.data[1].text}</p>
            </div>
          </div>
          <div className="life-box-left content-middle">
            <div className="life-box-image">
              <img src={data.data[3].image.source_url} />
            </div>
            <div className="content-right">
              <h6>{data.data[3].head}</h6>
              <p>{data.data[3].text}</p>
            </div>
          </div>
          <div className="life-box-left">
            <div className="life-box-image">
              <img src={data.data[5].image.source_url} />
            </div>
            <div className="content-right">
              <h6>{data.data[5].head}</h6>
              <p>{data.data[5].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Expect
