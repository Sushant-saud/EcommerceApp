import React from 'react'
import catiem from './catiem.css'
import { Link } from 'react-router-dom';
function Categoriesitem({ data }) {
    return (
        <div className='Container5'>

            <Link to={`/products/${data.categories}`}>
                <img className='Img' src={data.img} alt="pic" />
                <div className='Cat-Info'>
                    <h3 className='Cat-Title'>
                        {data.title}
                    </h3>
                    <button className='Cat-Button'>shop now</button>
                </div>
            </Link>
        </div>
    )
}

export default Categoriesitem;