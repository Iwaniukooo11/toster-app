import React from 'react';
import locStyles from './Sign.module.scss'

const Sign = props => {
    const type = props.type
    let disabled = null
    if (props.type === 'Plus' && props.breadStatus)
        disabled = true
    else if (props.type === 'Minus' && !props.breadStatus)
        disabled = true
    return (
        <button className={`${locStyles.Sign} ${locStyles['Sign' + type]}`}
            onClick={props.clicked}
            disabled={disabled}></button>
    );
}

export default Sign;