import React from 'react'
import './menu-item.styles.scss'


const MenuItem = (props) => (
    <div className='menu-item'>
        <div className='background-image' style={{
            backgroundImage: `url(${props.imageUrl})`
        }}/>
        <div className='content'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <span className='subtitle'>shop now</span>
        </div>
    </div>
);

export default MenuItem;
