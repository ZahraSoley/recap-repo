import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import ReserveFormInfo from '../../components/ReserveForm/ReserveFormInfo'


const Reserve = ({ setFormData }) => {
  return (
    <div>
      <Nav />
      <ReserveFormInfo setFormData={setFormData} />
      <Footer />
    </div>
  )
}

export default Reserve
