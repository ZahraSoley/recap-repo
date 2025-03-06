import './Highlights.css'
import DishCard from './DishCard/DishCard';

const Highlights = () => {
    return (
        <section className='highlights'>
            <div className='top'>
                <p>This Week Specials!</p>
                <button className='default-button-yellow'>Online Menu</button>
            </div>
            {/* <div className='bottom'> */}
                <DishCard/>
            {/* </div> */}
        </section>
    )
}
export default Highlights;


