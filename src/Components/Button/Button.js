import React from 'react';
import locStyles from './Button.module.scss'

const Button = props => {
    return (
        <button className={locStyles.Button}>{props.text}</button>
    );
}


export default Button;