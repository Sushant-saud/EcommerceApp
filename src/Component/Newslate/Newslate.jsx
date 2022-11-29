import { Send } from '@material-ui/icons';
import React from 'react'
import news from './news.css';
function Newslate() {
    return (
        <div className='News-Container'>
            <h3 className='News-Title'>NewsLetter</h3>
            <h2 className='News-Desc'>Get timely updates from your favorite products</h2>
            <div className='News-InputContainer'>
                <input className='News-input' type='text' placeholder='Your email'/>
                <button className='News-Button'>
                    <Send />
                </button>
            </div>

        </div>
    )
}

export default Newslate