import React from 'react';
import locStyles from './Tomato.module.scss'

const Tomato = props => {
    return (
        <div className={`${locStyles.Tomato}  ${locStyles['Tomato' + props.num]}`}>
            <div className={locStyles.TomatoDot}></div>
            <div className={locStyles.TomatoDot}></div>
            <div className={locStyles.TomatoDot}></div>
            <div className={locStyles.TomatoDot}></div>
            <div className={locStyles.TomatoDot}></div>
        </div>
    );
}

export default Tomato;