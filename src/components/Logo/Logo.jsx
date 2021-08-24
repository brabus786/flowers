import React from 'react';
import styles from './Logo.scss';

const Logo = ({size}) => {
    console.log(styles)
    return (
        <div className='Logo'>
            <span style={{fontSize:size}}>Easy</span>
            <span style={{fontSize:size}}>Shop</span>
        </div>
    );
};

export default Logo;