import salad from './salad.jpg'
import bruchetta from './bruchetta.jpg'
import cake from './LemonDessert.jpg'
import pasta from './pasta.jpg'
import fish from './fish.jpg'
import bike from './bike.jpg'

const CardInfo =[
    {
        picture:salad,
        name:'Greek Salad',
        price:'$12.99',
        description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        cta:'Order a delivery',
        bike:bike
    },
    {
        picture:bruchetta,
        name:'Bruchetta',
        price:'$5.99',
        description:'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
        cta:'Order a delivery',
        bike:bike
    },
    {
        picture:cake,
        name:'Lemon Dessert',
        price:'$6.00',
        description:'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        cta:'Order a delivery',
        bike:bike
    },
    {
        picture:pasta,
        name:'Pasta',
        price:'$13.99',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cta:'Order a delivery',
        bike:bike
    },

]

export default CardInfo;