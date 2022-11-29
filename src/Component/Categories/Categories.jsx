import React from 'react'
import { categories } from '../../data';
import gories from './categories.css';
import Categoriesitem from '../CategoriesItem/Categoriesitem'
function Categories() {
    return (
        <div className='Container4'>
            {
                categories.map((item) => {
                    return <Categoriesitem data={item} key={item.id}/>
                    
                })
            }
        </div>
    )
}

export default Categories