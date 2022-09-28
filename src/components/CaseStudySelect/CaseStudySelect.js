import React, { useEffect , useState} from 'react'
import Dropdown from './DropDown'
import './CaseStudySelect.scss'
const CaseStudySelect = props => {
  // const [designation,setDesignation]=useState("none")
  // const [services,setServices]=useState("none")
  // useEffect(()=>{
  //   // props.setDesignation(designation)
  //   console.log(designation)
  // },[designation])
  const [dropDownStat,setDropDownStat] = useState();
  // const [currentstat,setCurrentStat] = useState();
  const [role,setRole]=useState()
  const [service,setService]=useState()
  useEffect(()=>{
    // console.log(dropDownStat)
    if(dropDownStat=="role"){
      setService("band")
    }
    if(dropDownStat=="service"){
      setRole(true)
    }
  },[dropDownStat])
  return (
    <div className="row">
      <div className="col-12 text-center mb_40">
        
        <h2>
          I'm a
          <Dropdown items={props.servicesdesignation} 
          valuePassing={currentDesignation =>
            props.setDesignation(currentDesignation)
          }
          valueDrop={currentDrop=>{
            setDropDownStat(currentDrop)
          }}
          setDrop="role"
          type="Select Your Role"
          currentStat={role?true:false}
           />
          looking for
          <Dropdown items={props.servicetype} 
          valuePassing={currentServices =>
            props.setServices(currentServices)
          }
          valueDrop={currentDrop=>{
            setDropDownStat(currentDrop)
          }}
          setDrop="service"
          currentStat={role?false:true}
          type="Select the type of service you require"
           />
        </h2>
      </div>
    </div>
  )
}

export default CaseStudySelect
