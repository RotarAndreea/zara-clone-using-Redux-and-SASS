import { nanoid } from "nanoid";
import img from './images/dress-1.jpg'

export const dress=[
    {
        id: nanoid(),
        title:'Floral dress with red details and soft material',
        price: 20.99,
        image:require('./images/dress-1.jpg'),
        rating:5,
        stock: 5,
        isFavorite:false
    },
    {
        id: nanoid(),
        title:'Simple dress in green',
        price: 76,
        image:require('./images/dress-2.jpg'),
        rating:4,
        stock: 9,
        isFavorite:false
    },
    {
        id: nanoid(),
        title:'Organza dress',
        price: 46.99,
        image:require('./images/dress-3.jpg'),
        rating:5,
        stock: 12,
        isFavorite:false
    },
    {
        id: nanoid(),
        title:'A dress with pink details',
        price: 100,
        image:require('./images/dress-4.jpg'),
        rating:5,
        stock: 16,
        isFavorite:false
    },
    {
        id: nanoid(),
        title:'Limited edition long dress',
        price: 132,
        image:require('./images/dress-5.jpg'),
        rating:5,
        stock: 14,
        isFavorite:false
    },
    {
        id: nanoid(),
        title:'Straight dress in purple',
        price: 78,
        image:require('./images/dress-6.jpg'),
        rating:4,
        stock: 10,
        isFavorite:false
    },
    {
        id: nanoid(),
        title:'Black dress with details',
        price: 45,
        image:require('./images/dress-7.jpg'),
        rating:5,
        stock: 20,
        isFavorite:false
    },
    {
        id: nanoid(),
        title:'Floral dress with soft material',
        price: 35,
        image:require('./images/dress-8.jpg'),
        rating:5,
        stock: 18,
        isFavorite:false
    },
    {
        id: nanoid(),
        title:'Animal print dress',
        price: 66,
        image:require('./images/dress-9.jpg'),
        rating:4,
        stock: 7,
        isFavorite:false
    },
    {
        id: nanoid(),
        title:'Velvet dress',
        price: 87,
        image:require('./images/dress-10.jpg'),
        rating:3,
        stock: 7,
        isFavorite:false
    },
]