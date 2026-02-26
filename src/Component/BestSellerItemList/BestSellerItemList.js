import React from 'react'
import bestitemlist from './bestitemlist.css'
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
                        <ShoppingCartOutlinedIcon className='Best-Seller-Icon' />
                    </div>
                    <Link to={`/product/${data1._id}`}>
                        <div className='Best-Seller-Single-Icon'>
                            <SearchOutlinedIcon className='Best-Seller-Icon' />
                        </div>
                    </Link>


                    <div className='Best-Seller-Single-Icon' >

                        <FavoriteBorderOutlinedIcon className='Best-Seller-Icon' />
                    </div>
                </div>
                <div className='Best-Seller-Des'>
                    <h3>{data1.title}</h3>
                    <h3>{data1.desc}</h3>
                    <div className='Best-Seller-star'>
                        <StarIcon className='star' />
                        <StarIcon className='star' />
                        <StarIcon className='star' />
                        <StarIcon className='star' />
                        <StarIcon className='star-differnt' />
                    </div>

                    <p className='strike1'>${data1.price}<s className='strike'>$4533</s></p>
                </div>

            </div>






        </>
    )
}

export default BestSellerItemList;