import React from 'react'
import bestitemlist from './bestitemlist.css'
import { Star } from '@material-ui/icons';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { SearchOutlined } from '@material-ui/icons';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
function BestSellerItemList({ data1 }) {
    return (
        <>


            <div className='Best-Seller-Item'>
                <div className='Best-Seller-Circle'>
                </div>
                <img src={data1.img} className="Best-Seller-Img" alt="img" />
                <div className='Best-Seller-Info'>
                    <div className='Best-Seller-Single-Icon'>
                        <ShoppingCartOutlined className='Best-Seller-Icon' />
                    </div>
                    <Link to={`/product/${data1._id}`}>
                        <div className='Best-Seller-Single-Icon'>
                            <SearchOutlined className='Best-Seller-Icon' />
                        </div>
                    </Link>


                    <div className='Best-Seller-Single-Icon' >

                        <FavoriteBorderOutlined className='Best-Seller-Icon' />
                    </div>
                </div>
                <div className='Best-Seller-Des'>
                    <h3>{data1.title}</h3>
                    <h3>{data1.desc}</h3>
                    <div className='Best-Seller-star'>
                        <Star className='star' />
                        <Star className='star' />
                        <Star className='star' />
                        <Star className='star' />
                        <Star className='star-differnt' />
                    </div>

                    <p className='strike1'>${data1.price}<s className='strike'>$4533</s></p>
                </div>

            </div>






        </>
    )
}

export default BestSellerItemList;