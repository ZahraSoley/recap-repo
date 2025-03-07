import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import ConfirmReserve from '../../components/ConfirmReserve/ConfirmReserve'

const Confirm = (props) => {
  return (
    <div>
      <Nav/>
      <ConfirmReserve formData={props.formData}/>
      <Footer/>
    </div>
  )
}

export default Confirm
