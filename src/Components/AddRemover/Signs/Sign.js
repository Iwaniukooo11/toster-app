import React from 'react';
import locStyles from './Sign.module.scss'

const Sign = props => {
    const type = props.type
    return (
        <button className={`${locStyles.Sign} ${locStyles['Sign' + type]}`}></button>
    );
}

export default Sign;