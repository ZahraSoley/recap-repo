import './ConfirmReserve.css'

const ConfirmReserve = ({formData}) => {
  return (
    <div className='confirm-container'>
      <div className="confirm-banner">
        <p>Reservation compeleted!</p>
        <span>see you on {formData.date} for {formData.time}</span>
      </div>
    </div>
  )
}

export default ConfirmReserve
