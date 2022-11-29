// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { popularProducts } from '../../data'
// import SingleProduct from '../SingleProduct/SingleProduct'
// import pro from './pro.css';
// function Product({ cat, filter, sort }) {
//   const [products, setproducts] = useState([])
//   const [filterProduct, setfilterProduct] = useState([])
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(
//           cat ? `http://localhost:5000/api/product?category=${cat}` : "http://localhost:5000/api/product"
//         )
//         setproducts(res.data);
      
        
//       } catch (err) {
//         console.log(err);
//       }?
//     }
//     getProducts();
//   }, [cat]);

//   useEffect(() => {
//     cat && setfilterProduct(
//       products.filter((item) => Object.entries(filter).every(([key, value]) =>
//         item[key].includes(value)
//       )
//       )
//     )

//   }, [products, cat, filter])

//   useEffect(() => {
//     if (sort === "newest") {
//       setfilterProduct((prev) =>
//         [...prev].sort((a, b) => a.createdAt - b.createdAt)
//       );
//     } else if (sort === "asc") {
//       setfilterProduct((prev) =>
//         [...prev].sort((a, b) => a.price - b.price)
//       );
//     } else {
//       setfilterProduct((prev) =>
//         [...prev].sort((a, b) => b.price - a.price)
//       );
//     }
//   }, [sort]);
//   return (
//     <div className='P-Container'>
//       {
//        cat ? filterProduct.map((item) => {
//           return <SingleProduct data1={item} key={item.id} />
//         })
//         :
//          products.slice(0,8).map((item) => {
//           return <SingleProduct data1={item} key={item.id} />
//         })
//       }
//     </div>
//   )
// }

// export default Product;