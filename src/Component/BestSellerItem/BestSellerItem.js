import axios from 'axios';
import React, { useEffect, useState } from 'react'
import selleritem from './selleritem.css'
import BestSellerItemList from '../BestSellerItemList/BestSellerItemList';
function BestSellerItem({cat,filter,sort}) {
    const [product, setproduct] = useState([]);
    const [filterproduct, setfilterproduct] = useState([]);

    useEffect(() => {
        const getproduct = async () => {
            const res = await axios.get(cat ? `https://ecommer-backend.vercel.app/api/product?category=${cat}` : "https://ecommer-backend.vercel.app/api/product");
            setproduct(res.data);
        }
        getproduct()
    }, [cat]);
    useEffect(() => {
        cat && setfilterproduct(
            product.filter((item) => Object.entries(filter).every(([key, value]) =>
                item[key].includes(value)
            )
            )
        )

    }, [product, cat,filter])
    
    useEffect(() => {
      if (sort === "newest") {
        setfilterproduct((prev) =>[...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sort === "asc") {
        setfilterproduct((prev) =>[...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setfilterproduct((prev) =>[...prev].sort((a, b) => b.price - a.price)
        );
      }
    }, [sort]);
    return (
        <div className='P-container'>
            {
                cat ? filterproduct.map((item) => {
                    return <BestSellerItemList data1={item} key={item.id} />
                })
                    : product.slice(0, 8).map((item) => {
                        return <BestSellerItemList data1={item} key={item.id} />

                    })
            }
        </div>

    )
}

export default BestSellerItem;