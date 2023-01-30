import green from '../Screens/Home/assets/produtores/green.png'
import salad from '../Screens/Home/assets/produtores/salad.png'
import jennyJack from '../Screens/Home/assets/produtores/jenny-jack.png'
import grow from '../Screens/Home/assets/produtores/grow.png'
import potager from '../Screens/Home/assets/produtores/potager.png'

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const producter = {
    title: "Producter",
    listProducter:[
        {
            name:"Green",
            image: green,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber
        },
        {
            name:"Salad",
            image: salad,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber
        },
        {
            name:"Jenny Jack Farm",
            image: jennyJack,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber
        },
        {
            name:"Grow",
            image: grow,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber
        },
        {
            name:"Potager",
            image: potager,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber
        },
    ]
}

export default producter;
