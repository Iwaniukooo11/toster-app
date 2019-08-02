import React from 'react';
import locStyles from './Button.module.scss'
import { Link } from 'react-router-dom'

const Button = props => {



    const btn = <button className={locStyles.Button} onClick={props.clicked}>{props.text}</button>
    return (
        props.link ?
            <button className={locStyles.Button} onClick={props.clicked}>
                <Link to={props.link}>
                    {props.text}
                </Link>
            </button > : btn
    );
}


export default Button;