import React, { useEffect, useState } from 'react'
import { Map } from 'react-lodash'
import ReactHtmlParser from 'react-html-parser'

const Dropdown = props => {
  const items = props.items
  const [openItems, setOpenItems] = useState(false)
  const [itemselectclass, setItemsSelectClass] = useState('nice-select')
  const [opencto, setOpencto] = useState(false)
  const [selectedindex, setSelectedindex] = useState()
  const [ctoselectclass, setCtoselectclass] = useState('nice-select')
  const [selected, setSelected] = useState(props.type)
  const handleSelect = (index, value, name) => {
    setSelectedindex(index);
    props.valuePassing(value)
    setSelected(name)
  }

  useEffect(() => {
    setCtoselectclass(opencto ? 'nice-select open' : 'nice-select')
    setItemsSelectClass(openItems ? 'nice-select open' : 'nice-select')
    props.valueDrop(props.setDrop);
    // console.log(props.setDrop)
    // console.log(props.currentStat)
    // if(props.setDrop == props.currentStat ){
    //   setOpencto(false);
    //   setOpenItems(false)
    // }
  }, [opencto, openItems])
  // useEffect(()=>{
  //   console.log(props.currentStat)
  //   props.currentStat?setOpenItems(false):setOpenItems(true)
  // },[props.currentStat])
  return (
    <>
      {props.commonForm ? (
        <>
          <div
            className={itemselectclass}
            tabIndex="0"
            onClick={() => setOpenItems(!openItems)}
          >
            <span className="current">{ReactHtmlParser(selected)}</span>

            <ul className="list">
              
              <Map
                collection={items}
                iteratee={(item, index) => (
                  <li
                    key={item.id + '_' + index}
                    data-value={item.wordpress_id}
                    onClick={() => handleSelect(index, item.name)}
                    className={
                      index === selectedindex
                        ? 'option selected focus'
                        : 'option'
                    }
                  >
                    {item.name}
                  </li>
                )}
              ></Map>
            </ul>
          </div>
        </>
      ) : (
        <>

          <div
            className={ctoselectclass}
            tabIndex="0"
            onClick={() => setOpencto(!opencto)}
          >
            <span className="current">{ReactHtmlParser(selected)}</span>
            <ul className="list">
            {/* <li
                data-value="none"
                onClick={() => handleSelect("index", "none", props.type)}
                className={
                  "index" === selectedindex
                    ? 'option selected focus'
                    : 'option'
                }
              >
                {props.type}
              </li> */}
              <Map
                collection={items}
                iteratee={(item, index) => (
                  <li
                    key={item.id + '_' + index}
                    data-value={item.wordpress_id}
                    onClick={() => handleSelect(index, item.wordpress_id, item.name)}
                    className={
                      index === selectedindex
                        ? 'option selected focus'
                        : 'option'
                    }
                  >
                    {item.name}
                  </li>
                )}
              ></Map>
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default Dropdown
