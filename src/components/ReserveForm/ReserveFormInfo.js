import './ReserveFormInfo.css'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useSubmit from '../../hooks/useSubmit'

const ReserveFormInfo = () => {

  const { submit, response, isLoading, setIsLoading } = useSubmit()

  useEffect(() => {
    console.log("isLoading:", isLoading);
  }, [isLoading]);

  const formik = useFormik({

    initialValues: {
      guests: '',
      date: '',
      time: '',
      fullName: '',
      email: '',
      phoneNumber: '',
      request: ''
    },

    onSubmit: (values) => {
      submit(values, 2000)
    },

    validationSchema: Yup.object().shape({
      guests: Yup.string().required('Required!'),
      date: Yup.string().required('Required!'),
      time: Yup.string().required('Required!'),
      fullName: Yup.string()
        .min(4, 'Full name has to be at least four characters!')
        .required('Required!'),
      email: Yup.string()
        .email('Invalid email address!')
        .required('Required!'),
      phoneNumber: Yup.string()
        .matches(/^\d+$/, 'Must contain only digits!') // Ensure only numbers
        .min(7, 'Too short!')
        .max(15, 'Too long!')
        .required('Required!'),
      request: Yup.string()
        .min(10, 'Too short!')
    })
  })
  return (
    <div className="form-container" >
      <form className='info-form' onSubmit={formik.handleSubmit}>

        <span>A Memorable Dining Experience Awaits You</span>

        <div className="lable-star">
          <span>{formik.errors.guests && formik.touched.guests ? '*' : null}</span>
          <label htmlFor="guests">Number Of Guests</label>
        </div>
        <select
          id='guests'

          {...formik.getFieldProps('guests')}
        >
          <option value=''disabled>select number of guests</option>
          <option >1-2</option>
          <option >2-4</option>
          <option >4-8</option>
          <option >8-15</option>
          <option >15-25</option>
        </select>
        <p>{formik.errors.guests && formik.touched.guests ? formik.errors.guests : null}</p>

        <div className="lable-star">
          <span>{formik.errors.date && formik.touched.date ? '*' : null}</span>
          <label htmlFor="date">Date</label>
        </div>
        <input
          id='date'
          type="date"
          {...formik.getFieldProps('date')}
        />
        <p>{formik.errors.date && formik.touched.date ? formik.errors.date : null}</p>

        <div className="lable-star">
          <span>{formik.errors.time && formik.touched.time ? '*' : null}</span>
          <label htmlFor="time">Time</label>
        </div>
        <select
          id='time'
          {...formik.getFieldProps('time')}
        >
          <option value='' disabled>choose an option</option>
          <option >Lunch: 12-1</option>
          <option >Lunch: 1-2</option>
          <option >Dinner: 6-7</option>
          <option >Dinner: 7-8</option>
          <option >Dinner: 8-9</option>
          <option >Dinner: 9-10</option>
        </select>
        <p>{formik.errors.time && formik.touched.time ? formik.errors.time : null}</p>

        <div className="lable-star">
          <span>{formik.errors.fullName && formik.touched.fullName ? '*' : null}</span>
          <label htmlFor="fullName">Full Name</label>
        </div>
        <input
          id='fullName'
          type="text"
          {...formik.getFieldProps('fullName')}
        />
        <p>{formik.errors.fullName && formik.touched.fullName ? formik.errors.fullName : null}</p>

        <div className="lable-star">
          <span>{formik.errors.email && formik.touched.email ? '*' : null}</span>
          <label htmlFor="email">Email</label>
        </div>
        <input
          id='email'
          type="email"
          {...formik.getFieldProps('email')}
        />
        <p>{formik.errors.email && formik.touched.email ? formik.errors.email : null}</p>

        <div className="lable-star">
          <span>{formik.errors.phoneNumber && formik.touched.phoneNumber ? '*' : null}</span>
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>
        <input
          id='phoneNumber'
          type="number"
          {...formik.getFieldProps('phoneNumber')}
        />
        <p>{formik.errors.phoneNumber && formik.touched.phoneNumber ? formik.errors.phoneNumber : null}</p>

        <label htmlFor="request">Special Request</label>
        <textarea
          id='request'
          {...formik.getFieldProps('request')}
        />
        {formik.errors.request && formik.touched.request ?
          <p> {formik.errors.request} </p>
          : null}

        <button className='default-button-yellow'
          type='submit'
        >
          {isLoading === true ? <div className='spinner'></div> : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default ReserveFormInfo




