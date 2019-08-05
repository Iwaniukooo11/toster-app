import React from 'react';
import locStyles from './Button.module.scss'
import { Link } from 'react-router-dom'

const Button = props => {

    const btn = <button className={locStyles.Button} onClick={props.clicked} disabled={props.disabled}>{props.children}</button>
    return (
        props.link ?
            <button className={locStyles.Button} onClick={props.clicked} disabled={props.disabled}>
                <Link to={props.link}>
                    {props.children}
                </Link>
            </button > : btn
    );
}


export default Button;