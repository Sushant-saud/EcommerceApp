import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import single from './single.css'
import { Link } from 'react-router-dom'
function SingleProduct({ data1 }) {
    return (
        <div className='Single-Container'>
             <div className='Single-Circle'>
            </div>
            <img src={data1.img} className="Single-Img" alt="img" />
            <div className='Single-Info'>
                <div className='Single-Icon'>
                    <ShoppingCartOutlined className='Icon' />
                </div>
                <Link to={`/product/${data1._id}`}>
                <div className='Single-Icon'>
                    <SearchOutlined className='Icon' />
                </div>
                </Link>
                <div className='Single-Icon' >

                    <FavoriteBorderOutlined className='Icon' />
                </div>
            </div>
        </div>
    )
}

export default SingleProduct