import React, { useEffect, useState } from 'react'
import cancel from '../../assets/img/cancel.svg'


const ThankyouPopup = props => {
    const { dis, opn, close, popupclose, subject ,head,text,Customclass, } = props
    const closeFunction =() =>{
        popupclose()
        close()
        
    }
    return (
        <div className="modalWarpper">
            <div className="modalBackdrop" onClick={close}></div>
            <div className={Customclass?Customclass:"modalBox"} style={{zIndex:'200'}}>
                <div className="popup-cancel">
                    <img src={cancel} className="popup_btn-cancel" onClick={popupclose,close} />
                </div>
                <div className="row height-100">
                    
                    <div className="col-lg-12 display-flex text-center">
                        <div className="pl-sm-5 pl-3 pr-sm-5 pr-3 m-auto">
                            <h2 className="mb-4">{head}</h2>
                            <p className="mb-4">
                                {text}
                            </p>
                           <a className="button" onClick={close}>Okay</a>
                            <div class="input-bar">
                                <div class="input-bar-item width100">
                                    {/* <MainForm tokenprop={token} subject={subject} link={link} /> */}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ThankyouPopup;