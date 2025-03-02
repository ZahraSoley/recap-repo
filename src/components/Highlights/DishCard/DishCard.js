import './DishCard.css'
import CardInfo from '../../../assets/DishCardInfo'

const DishCard = () => {
  return (
              <div className='Card-Container'>
            {CardInfo.map((food) => (
                <div className='Dish-Card' key={food.name}>
                    <img src={food.picture} alt="" className='food-pic'/>
                    <div className='food-info'>
                        <p>{food.name}</p>
                        <p>{food.price}</p>
                    </div>
                    <p className='para-text-s'>{food.description}</p>
                    <div className='food-cta'>
                        <p>{food.cta}</p>
                        <img src={food.bike} alt="" className='bike'/>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default DishCard