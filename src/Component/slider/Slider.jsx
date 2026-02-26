import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import slide from './slide.css';
import { sliderItems } from '../../data';
function Slider() {
    const [slideIndex, setslideIndex] = useState(0);
    const active={
        transform:`translateX(-${slideIndex*100}vw)`
    }
    const handleArrow = (direction) =>{
               if (direction === 'left') {
            setslideIndex(slideIndex > 0 ? slideIndex- 1 : 5)
        }
        else {
            setslideIndex(slideIndex < 5 ? slideIndex + 1 : 0)
        }
        

    }
    return (
        <div className='letsee'>
             <h3>Feather Product</h3>
            <div className='Container2'>
           
            <div className='Arrow-left'>
                <ArrowLeftOutlinedIcon className="icon" onClick={() =>handleArrow('left')} />
            </div>
            <div className="Wrapper2" style={active}>
                {
                    sliderItems.map((item) => {
                        return (
                            <>
                                <div className={`slide ${item.bg}`}>
                                    <div className='ImgContainer'>
                                        <img src={item.img} className='Image' alt="PIC" />
                                    </div>
                                    <div className='InfoContainer'>
                                        <h3 className='Title'>
                                            {item.title}
                                        </h3>
                                        <p className='Desc'>
                                            {item.desc}
                                        </p>
                                        <button className='Button'>
                                            show now
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
            <div className='Arrow-right'>
                <ArrowRightOutlinedIcon className="icon" onClick={() => handleArrow('right') } />
            </div>

        </div>

        </div>
        
    )
}


export default Slider