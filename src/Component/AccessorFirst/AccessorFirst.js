import React, {useState,useEffect } from 'react'
import Bestseller from '../Bestseller/Bestseller';
import Product from '../Product/Product';
import accessfirst from './accessfirst.css';
import AccessorProduct from '../AccessorProduct/AccessorProduct';
import { Accessories } from '../../data';
import { Slider } from '@material-ui/core';
import { ArrowBack, Menu } from '@material-ui/icons';
import Pagination from '../pagination/Pagination';
import Accesories from '../Accesories/Accesories';
function AccessorFirst() {
    const [sort, setsort] = useState("newest");
    const [filter, setfilter] = useState({});
    const [val, setvalue] = useState([0, 0]);
    const [currentPage,setcurrentPage]=useState(1);
    const [postsPerPage,setpostsPerPage]=useState(10)
   
    const handleChange = (e, item) => {
        setvalue(item);
    }
    const handleFilter =(e)=> {
        const value = e.target.value;
        setfilter({
            ...filter,
            [e.target.name]: value,
        })
    };

    const handleNext=()=>{

    }
    const handleprevious=()=>{

    }
    const number = filter.num;
    const num = number ? filter.num : 12;
    return (
        <div className='AccessorFirst-Full'>
            <div className='AccessorFirst'>
                <div className='AccessLeft'>
                    <div className='AccessLeft-First'>
                        <h3 className='AccesHeading'>Accesories</h3>
                        <div className='AccessLeft-First-list'>
                            <li>Apple Car</li>
                            <li>Airport & wireless</li>
                            <li>Cable & Docks</li>
                            <li>Cases & Films</li>
                            <li>Charging & Devices</li>
                            <li>Connected home</li>
                            <li>Headphones</li>
                        </div>
                        <div className='AccessLeft-First-quantity'>
                            <li>2</li>
                            <li>48</li>
                            <li>16</li>
                            <li>15</li>
                            <li>23</li>
                            <li>1</li>
                            <li>95</li>
                        </div>
                    </div>
                    <div className='AccessLeft-Second'>
                        <h3>Prices</h3>
                        <div className='Range'>
                            <p>Range:</p>
                            <p>${val[0]}-${val[1]}</p>
                        </div>
                        <Slider className='slider' value={val} onChange={handleChange} price max={5000} min={1000} />
                    </div>

                    <div className='AccessLeft-Third'>
                        <p>COLOR</p>
                        <div className='color'>
                            <ul>
                                <li className='blue' value="blue"></li>
                                <li className='red' value="red"></li>
                                <li className='black' value="black"></li>
                                <li className='yellow' value="yellow"></li>
                                <li className='green' value="green"></li>
                            </ul>
                        </div>
                    </div>

                    <div className='AccessLeft-Fourth'>
                        <h3>BRAND</h3>
                        <div className='brand'>
                            <div className='brand-list'>
                                <li>Apple</li>
                                <li>99</li>
                            </div>
                            <div className='brand-list'>
                                <li>LG</li>
                                <li>99</li>
                            </div>
                            <div className='brand-list'>
                                <li>Samsung</li>
                                <li>99</li>
                            </div>
                            <div className='brand-list'>
                                <li>Siemens</li>
                                <li>99</li>
                            </div>

                        </div>
                    </div>
                    <div className="AccessLeft-Fifth">
                        <p>MORE</p>
                    </div>

                </div>
                <div className='AccessRight'>
                    <div className='AccessRight-First'>
                        <div className='AccessRight-First-des'>
                            <h3>iphone 8</h3>
                            <p>performance and design, <br></br>Taken right to the top</p>
                            <p className='shop'>shop now</p>
                        </div>
                        <img src="\Image\iphone_8.png" className='AcessRight-img' alt="img" />
                    </div>
                    <div className='AccessRight-Second'>
                        <div className='AccessRight-Second-Item'>
                            <p>{Accessories.length} items</p>
                        </div>
                        <div className='AccessRight-Second-sort'>
                            <span>Sort By</span>
                            <select onChange={(e)=>{setsort(e.target.value) }} name="color">
                                <option defaultChecked>filter</option>
                                <option value="newest">newest</option>
                                <option value="price">Price(asc)</option>
                                <option value="desc">Price(desc)</option>
                            </select>
                        </div>
                        <div>
                            <span>show</span>
                            <select onChange={handleFilter} name="num">
                                <option defaultChecked>Choose</option>
                                <option>12</option>
                                <option>8</option>
                                <option>7</option>
                                <option>6</option>
                                <option>4</option>
                            </select>
                        </div>
                        <img src="https://cdn-icons-png.flaticon.com/512/17/17704.png" alt="menu" className='img2' />
                        <Menu className='AccessRight-menu' />
                    </div>
                    <div className='accessor-product'>
                        {
                            Accessories.slice(0, `${num}`).map((item) => {
                                return <AccessorProduct data={item} sort={sort} />
                            })
                        }
                    </div>
                    <div className='Pagination'>
                        <ul className='pagination-num'>
                            <li><span>1</span></li>
                            <li><span>2</span></li>
                            <li><span>3</span></li>
                            <li><span>4</span></li>
                        </ul>
                    </div>
                    {/* //pagination */}
                 <Pagination/>
                </div>
            </div>
        </div>
    )
}

export default AccessorFirst